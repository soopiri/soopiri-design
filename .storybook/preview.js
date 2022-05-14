import { useEffect, useMemo } from "react";
import { GlobalStyle } from "../src/shared/global";
import { themes as storyBookThemes } from "@storybook/theming";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "storybook-dark-mode";
import themes from "../src/themes";

const ThemeWrapper = ({ children }) => {
  const theme = themes[useDarkMode() ? "dark" : "light"];
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const addBackgroundStyle = (selector, css, storyId) => {
  const existingStyle = document.getElementById(selector);
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    const style = document.createElement("style");
    style.setAttribute("id", selector);
    style.innerHTML = css;

    const gridStyleSelector = `addon-backgrounds-grid${
      storyId ? `-docs-${storyId}` : ""
    }`;
    // If grids already exist, we want to add the style tag BEFORE it so the background doesn't override grid
    const existingGridStyle = document.getElementById(gridStyleSelector);
    if (existingGridStyle) {
      existingGridStyle.parentElement.insertBefore(style, existingGridStyle);
    } else {
      document.head.appendChild(style);
    }
  }
};
const BackgroundWrapper = ({ children, context }) => {
  const selector =
    context.viewMode === "docs"
      ? `#anchor--${context.id} .docs-story`
      : ".sb-show-main";

  const theme = themes[useDarkMode() ? "dark" : "light"];
  const selectedBackgroundColor = theme.background;
  const backgroundStyles = useMemo(() => {
    return `
      ${selector} {
        background: ${selectedBackgroundColor} !important;
        transition: background-color 0.3s;
      }
    `;
  }, [selectedBackgroundColor, selector]);

  useEffect(() => {
    const selectorId =
      context.viewMode === "docs"
        ? `addon-backgrounds-docs-${context.id}`
        : `addon-backgrounds-color`;

    addBackgroundStyle(
      selectorId,
      backgroundStyles,
      context.viewMode === "docs" ? context.id : null
    );
  }, [backgroundStyles, context]);

  return <>{children}</>;
};

export const decorators = [
  (renderStory, context) => (
    <BackgroundWrapper context={context}>
      <ThemeWrapper>{renderStory()}</ThemeWrapper>
    </BackgroundWrapper>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...storyBookThemes.dark, appBg: themes.dark.background },
    light: { ...storyBookThemes.light, appBg: themes.light.background },
  },
};

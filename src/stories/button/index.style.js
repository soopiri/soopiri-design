import {css} from 'styled-components';

const ButtonTheme = (theme) => theme.button;
const CommonStyle = (theme) => css`
  width: 140px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
`;

const Primary = css(({theme}) => {
  const primaryTheme = ButtonTheme(theme).Primary;
  return css`
    ${CommonStyle(theme)};
    background-color: ${primaryTheme.backgroundColor};
    color: ${primaryTheme.color};
  `;
});

const Cancel = css(({theme}) => {
  const cancelTheme = ButtonTheme(theme).Cancel;
  return css`
    ${CommonStyle(theme)};
    background-color: ${cancelTheme.backgroundColor};
    color: ${cancelTheme.color};
  `;
});

const Default = css(({theme}) => {
  const defaultTheme = ButtonTheme(theme).Default;
  return css`
    ${CommonStyle(theme)};
    background-color: ${defaultTheme.backgroundColor};
    color: ${defaultTheme.color};
  `;
});

export default {Primary, Cancel, Default};

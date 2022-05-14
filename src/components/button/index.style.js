import { css } from 'styled-components'

const ButtonTheme = (theme) => theme.button

const CommonStyle = (theme) => css`
  width: 140px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  border: none;
  cursor: pointer;
  border-radius: ${ButtonTheme(theme).borderRadius};
  box-shadow: none;
  text-shadow: none;
  &:disabled {
    opacity: 0.2;
    box-shadow: none;
    cursor: not-allowed;
  }
`

const Primary = css(({ theme }) => {
  const primaryTheme = ButtonTheme(theme).Primary
  return css`
    ${CommonStyle(theme)};
    background-color: ${primaryTheme.backgroundColor};
    color: ${primaryTheme.color};
    &:focus {
      background-color: ${primaryTheme.focus.backgroundColor};
      color: ${primaryTheme.focus.color};
    }
    &:hover {
      background-color: ${primaryTheme.hover.backgroundColor};
      color: ${primaryTheme.hover.color};
      box-shadow: ${primaryTheme.hover.boxShadow};
      border-color: ${primaryTheme.hover.borderColor};
    }
    &:active {
      background-color: ${primaryTheme.active.backgroundColor};
    }
    &:disabled,
    &:disabled:hover {
      background-color: ${primaryTheme.disabled.backgroundColor};
      color: ${primaryTheme.disabled.color};
      border-color: ${primaryTheme.disabled.borderColor};
    }
  `
})

const Cancel = css(({ theme }) => {
  const cancelTheme = ButtonTheme(theme).Cancel
  return css`
    ${CommonStyle(theme)};
    background-color: ${cancelTheme.backgroundColor};
    color: ${cancelTheme.color};
    border: ${cancelTheme.border};
    &:focus {
      background-color: ${cancelTheme.focus.backgroundColor};
      color: ${cancelTheme.focus.color};
      border: ${cancelTheme.focus.border};
    }
    &:hover {
      background-color: ${cancelTheme.hover.backgroundColor};
      color: ${cancelTheme.hover.color};
      box-shadow: ${cancelTheme.hover.boxShadow};
      border: ${cancelTheme.hover.border};
    }
    &:active {
      background-color: ${cancelTheme.active.backgroundColor};
    }
    &:disabled,
    &:disabled:hover {
      background-color: ${cancelTheme.disabled.backgroundColor};
      color: ${cancelTheme.disabled.color};
      border-color: ${cancelTheme.disabled.borderColor};
    }
  `
})

const Default = css(({ theme }) => {
  const defaultTheme = ButtonTheme(theme).Default
  return css`
    ${CommonStyle(theme)};
    background-color: ${defaultTheme.backgroundColor};
    color: ${defaultTheme.color};
    &:focus {
      background-color: ${defaultTheme.focus.backgroundColor};
      color: ${defaultTheme.focus.color};
    }
    &:hover {
      background-color: ${defaultTheme.hover.backgroundColor};
      color: ${defaultTheme.hover.color};
      box-shadow: ${defaultTheme.hover.boxShadow};
      border-color: ${defaultTheme.hover.borderColor};
    }
    &:active {
      background-color: ${defaultTheme.active.backgroundColor};
    }
    &:disabled,
    &:disabled:hover {
      background-color: ${defaultTheme.disabled.backgroundColor};
      color: ${defaultTheme.disabled.color};
      border-color: ${defaultTheme.disabled.borderColor};
    }
  `
})

export default { Primary, Cancel, Default }
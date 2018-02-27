import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import theme from './theme';

export default injectGlobal`
  ${normalize()};

  html,
  body,
  h1,
  #root {
    font-family: ${theme.fonts.graphik.regular}, sans-serif;
    font-display: swap;
    line-height: ${theme.lineHeight.regular};
    color: ${theme.colors.textColor};
  }

  html {
    font-size: 62.5%;
    height: 100%;
    box-sizing: border-box;
  }

  body {
    font-size: ${theme.fontSize.regular};
    min-height: 100%;
    background-color: ${theme.colors.bg};
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }

  p {
    margin: 10px 0;
    font-family: ${theme.fonts.graphik.regular};
    line-height: ${theme.lineHeight.regular};
    font-size: ${theme.fontSize.medium};
    color: ${theme.colors.textColor};
  }

  small {
    font-family: ${theme.fonts.graphik.regular};
    line-height: ${theme.lineHeight.extraSmall};
    font-size: ${theme.fontSize.small};
    color: ${theme.colors.textSmall};
  }

  a {
    color: ${theme.colors.link};
    text-decoration: none;
    font-family: ${theme.fonts.graphik.medium};
    transition: ${theme.transition};

    &:focus,
    &:hover {
      transition: ${theme.transition};
    }

    &:focus {
      opacity: ${props => props.theme.opacity.text07};
    }
  }

  b {
    font-family: ${theme.fonts.graphik.medium};
  }

  h1 {
    font-family: ${theme.fonts.graphik.medium};
    font-size: ${theme.fontSize.giant};
    line-height: ${theme.lineHeight.larger};
    margin-bottom: 20px;
  }

  h2 {
    font-family: ${theme.fonts.graphik.medium};
    font-size: ${theme.fontSize.larger};
    line-height: ${props => props.theme.lineHeight.larger};
    margin: 20px 0;
    letter-spacing: -0.38px;
    line-height: 42px;
  }

  h3 {
    font-size: ${theme.fontSize.large};
    font-family: ${theme.fonts.graphik.medium};
    line-height: ${theme.lineHeight.medium};
    margin: 10px 0;
  }

  h4 {
    font-size: ${theme.fontSize.medium};
    font-family: ${theme.fonts.graphik.medium};
    line-height: ${theme.lineHeight.medium};
    margin: 0 0 10px;
  }

  h5 {
    font-size: ${theme.fontSize.regular};
    font-family: ${theme.fonts.graphik.medium};
    line-height: ${theme.lineHeight.medium};
    margin: 0 0 10px;
  }

  h6 {
    font-size: ${theme.fontSize.small};
    font-family: ${theme.fonts.graphik.medium};
    line-height: ${theme.lineHeight.medium};
    margin: 0 0 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ::-webkit-input-placeholder {
    font-weight: normal;
    font-family: ${theme.fonts.graphik.regular};
  }

  ::-moz-placeholder {
    font-weight: normal;
    font-family: ${theme.fonts.graphik.regular};
  }

  :-ms-input-placeholder {
    font-weight: normal;
    font-family: ${theme.fonts.graphik.regular};
  }

  :-moz-placeholder {
    font-weight: normal;
    font-family: ${theme.fonts.graphik.regular};
  }

    /* stylelint-disable */
    @font-face {
      font-family: ${theme.fonts.graphik.regular};
      src: url('fonts/graphikLC/GraphikLC-Regular.otf');
    }

    @font-face {
    font-family: ${theme.fonts.graphik.medium};
      src: url('fonts/graphikLC/GraphikLC-Medium.otf');
    }

  `;

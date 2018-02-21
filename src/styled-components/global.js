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
  }

  html {
    font-size: 62.5%;
    height: 100%;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    min-height: 100%;
    color: ${theme.colors.textColor};
    background-color: ${theme.colors.bg};
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }

  small {
    font-size: ${theme.fontSize.regular};
  }

  a {
    color: ${theme.colors.purple};
    text-decoration: none;
    font-family: ${theme.fonts.graphik.regular};
    transition: ${theme.transition};

    &:focus,
    &:hover {
      transition: ${theme.transition};
    }

    &:focus {
      opacity: ${props => props.theme.opacity.text07};
    }
  }

  h1 {
    font-family: ${theme.fonts.graphik.medium};
    font-size: ${theme.fontSize.extraLarge};
    background: linear-gradient(274deg, #618ef1, #e6664a 92%, #fbb933);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 350px;
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
      src: url('/fonts/graphikLC/GraphikLC-Regular.otf');
    }

    @font-face {
    font-family: ${theme.fonts.graphik.medium};
      src: url('/fonts/graphikLC/GraphikLC-Medium.otf');
    }

  `;

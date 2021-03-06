import { createGlobalStyle } from 'styled-components';

import SFRegular from '../assets/fonts/sf-pro-display-regular.ttf';
import SFMedium from '../assets/fonts/sf-pro-display-medium.ttf';
import SFBold from '../assets/fonts/sf-pro-display-bold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'SF Pro';
    font-style: normal;
    font-weight: 400;
    src: url(${SFRegular});
  }

  @font-face {
    font-family: 'SF Pro';
    font-style: normal;
    font-weight: 500;
    src: url(${SFMedium});
  }

  @font-face {
    font-family: 'SF Pro';
    font-style: normal;
    font-weight: 700;
    src: url(${SFBold});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    height: 100vh;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: #fff;
    color: #17171b;
    font-size: 1.6rem;
  }

  body, input, button {
    font-family: 'SF Pro';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;

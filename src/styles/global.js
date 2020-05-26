import { createGlobalStyle } from 'styled-components';
import FuturaStdLight from '../fonts/FuturaStd-Light.otf';
import FuturaStdBook from '../fonts/FuturaStd-Book.otf';
import FuturaStdHeavy from '../fonts/FuturaStd-Heavy.otf';
import FuturaStdBold from '../fonts/FuturaStd-Bold.otf';
import FuturaStdExtraBold from '../fonts/FuturaStd-ExtraBold.otf';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing:border-box;
}

  @font-face {
    font-family: 'FuturaStd-Light';
    src: local('FuturaStd-Light'), url(${FuturaStdLight}) format('woff');
  }

  @font-face {
    font-family: 'FuturaStd-Book';
    src: local('FuturaStd-Book'), url(${FuturaStdBook}) format('woff');
  }

  @font-face {
    font-family: 'FuturaStd-Heavy';
    src: local('FuturaStd-Heavy'), url(${FuturaStdHeavy}) format('woff');
  }

  @font-face {
    font-family: 'FuturaStd-Bold';
    src: local('FuturaStd-Bold'), url(${FuturaStdBold}) format('woff');
  }

  @font-face {
    font-family: 'FuturaStd-ExtraBold';
    src: local('FuturaStd-ExtraBold'), url(${FuturaStdExtraBold}) format('woff');
  }

html, body, #root {
  min-height: 100%;
  font-family: 'FuturaStd-Light';
}

body {
  -webkit-font-smoothing: antialiased !important;
}

button {
  cursor: pointer;
}
`;

import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, bottom {
    font: 14px 'Roboto' sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .flex {
    display: flex;

    &-column { flex-direction: column }

    &-grow {
      flex-grow: 1;
    }

    /* Justification */
    &-between { justify-content: space-between }
    &-around { justify-content: space-around }
    &-justify-start {justify-content: flex-start}
    &-justify-end {justify-content: flex-end}
    &-justify-center {justify-content: center}
    &-space-evenly {justify-content: space-evenly}

    /* Alignment */
    &-start   { align-items: flex-start }
    &-center  { align-items: center }
    &-end     { align-items: flex-end }
    &-stretch { align-items: stretch }
    &-wrap    { flex-wrap: wrap }
  }

  .button {
    &-primary{
      background: #7D40E7;
      color: #fff;
    }
  }
`;

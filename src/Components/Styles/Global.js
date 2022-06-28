import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

  :root {
    font-family: 'Nunito Sans', sans-serif;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  * {
    padding: 0;
    margin: 0;
  }

  .BoldText {
    font-weight: 600;
  }
`

export default GlobalStyles;

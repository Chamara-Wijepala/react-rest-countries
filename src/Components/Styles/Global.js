import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  background: '#fafafa',
  text: '#111517',
  element: '#fff',
  input: '#858585',
};

export const darkTheme = {
  background: '#202c37',
  element: '#2b3945',
  text: '#fff',
};

export const GlobalStyles = createGlobalStyle`
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

  main {
    background-color: ${({ theme }) => theme.background};
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p, a, img {
    color: ${({ theme }) => theme.text};
  }

  .BorderLink {
    background-color: ${({ theme }) => theme.element};
  }

  .BoldText {
    font-weight: 600;
  }

  header,
  main {
    padding: 0 10px;
  }

  .HeaderContentWrapper, 
  .MainContentWrapper {
    max-width: 1440px;
    margin: auto;
  }
`;

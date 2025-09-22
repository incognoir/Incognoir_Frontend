import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body, html, #root {
    padding: 0; margin: 0;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.light};
    font-family: ${({ theme }) => theme.font.body};
  }
  h1, h2, h3, h4, h5 {
    font-family: ${({ theme }) => theme.font.heading};
    letter-spacing: 2px;
    line-height: 1.15;
  }
  a, button {
    font-family: ${({ theme }) => theme.font.heading};
    text-transform: uppercase;
    font-size: 1.08em;
    letter-spacing: 1px;
  }
  * { box-sizing: border-box; }
`;

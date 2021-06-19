import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Raleway', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1{
    margin: 0;
  }
`;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 15px;
`;

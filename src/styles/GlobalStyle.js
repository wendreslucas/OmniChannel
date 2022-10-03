import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 html, body,  #root {
   max-width: 100vw;
    max-height: 100vh;

    width: 100%;
    height: 100%;
 }

 *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto ', sans-serif, 'Raleway', sans-serif;  
    
 }
`;

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
 :root {
   // cores da marca
   --primary: #03303B;
   --secondary: #A2D6D3;

   // cores de status
   --info:#2F80ED;
   --success: #27AE60;
   --warning: #E2B93B;
   --error:#EB5757;

   // cores base
   --black: #000000;
   --black1: #1D1D1D;
   --black2:#282828;
   --background:#F4FBFA;
   --white: #FCFCFC;
   --aba:#C2D3D7;

   // Tons de cinza
   --gray: #767676;
   --gray1: #333333;
   --gray2:#4F4F4F;
   --gray3:#828282;
   --gray4:#BDBDBD;
   --gray5: #E0E0E0;

   // Tipografia
   --heading1: 56px;
   --heading2: 48px;
   --heading3: 40px;
   --heading4: 32px;
   --heading5: 24px;
   --heading6: 20px;

   --primaryHover: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      #03303b;

   --secondaryHover:  linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #03303B; ;

 }
`;

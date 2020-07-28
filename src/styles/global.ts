import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  font-family: 'Exo 2', sans-serif;
}

:root {
  --primary: #18b913;
  --black: #000000;
  --blackLighter: #9E9E9E;
  --grayLight: #F5F5F5;
  --grayMedium: #e5e5e5; 
  --white: #FFFFFF;
  --frontEnd: #6BD1FF;
  --backEnd: #00C86F;
}

html,
body {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
} 
`;

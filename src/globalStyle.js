import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: rgba(18, 18, 18,0.9);
}
ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
li {
  text-decoration: none;
  list-style: none;
}
a{
  text-decoration: none;
}
`;

export default GlobalStyle;

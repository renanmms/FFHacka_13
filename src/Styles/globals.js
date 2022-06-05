import {createGlobalStyles} from "styled-components";

export default createGlobalStyles`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    input, button, textarea{
      outline: none;
    }
  }
  :root{
    --color-primary: #E60000;
    --color-secondary: #C40003;
    --green: #1D5902;
  }
`;
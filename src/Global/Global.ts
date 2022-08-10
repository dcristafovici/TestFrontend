import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Helvetica", sans-serif;
    font-weight: 400;
  }
  body.stoped,
  body.no-scroll {
    overflow: hidden;
  }
  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }
  ul {
   margin: 0;
   padding: 0;
   list-style-type: none; 
  }
  input,
  select,
  textarea{
    outline: none;
    background: none;
    border: none;
  }

  .content {
    max-width: 1200px;
    margin: 0 auto;
  }
`;
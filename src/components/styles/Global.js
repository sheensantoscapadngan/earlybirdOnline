import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #f1f1f1;
        font-family: 'Questrial', sans-serif;
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;

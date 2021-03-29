import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --dark-bg: #1a1d22;
        --blue-bg: #30475e;
        --orange-bg: #f2a365;
        --white-bg: #ececec;
    }

    *,
    *::after, 
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: "Catamaran", sans-serif;
        background-color: var(--dark-bg);
        overflow: hidden;
    }
`;

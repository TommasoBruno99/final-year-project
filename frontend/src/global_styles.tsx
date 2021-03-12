import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600;800&display=swap");

    :root {
        --dark-bg: #222831;
        --blue-bg: #30475e;
        --orange-bg: #f2a365;
        --white-bg: #ececec;
    }

    *,
    *::after, 
    *::before {
        margin: 0;
        padding: 0;
    }
    
    body {
        font-family: "Catamaran", sans-serif;
        background-color: var(--blue-bg);
    }
`;

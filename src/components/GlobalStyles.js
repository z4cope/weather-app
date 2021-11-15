import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-image: linear-gradient(to right, #1d1d1d, #1d1d1d78), url("https://images.unsplash.com/photo-1508766505-ff8c5c590939?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1752&q=80");
        background-size: cover;
        background-repeat: no-repeat;
        font-family: 'Poppins', sans-serif;
    }
    button {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 0.8rem;
        letter-spacing: 0.2rem;
    }
`;

export default GlobalStyles;

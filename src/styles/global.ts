import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
    }

    body {
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.dark};
        
        /* It only works on macOS */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: auto;
        /* Firefox similar property */
    }

    body, input, textarea, button {
        font-family: sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`

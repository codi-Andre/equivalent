import styled from 'styled-components'

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 86px 1fr;
  gap: 0.5rem;

  label {
    margin-top: 6px;
    font-size: small;
    font-weight: bold;
  }

  input {
    border-radius: 6px;
    border: 0;
    background-color: ${props => props.theme.colors.grayLight};
    padding: 0.5rem;
  }

  div {
    margin-top: 0.5rem;
    grid-column: 1/3;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    border: 0;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    padding: 0.5rem;

    &:disabled {
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
    }
  }
`

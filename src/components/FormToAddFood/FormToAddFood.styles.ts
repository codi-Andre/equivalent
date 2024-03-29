import { Button } from '@/components/Button/Button.styles'
import styled, { css, keyframes } from 'styled-components'

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

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

    &:focus {
      box-shadow: 0 0 0 2px ${props => props.theme.colors.secondary};
    }
  }

  div {
    margin-top: 0.5rem;
    grid-column: 1/3;
    display: flex;
    justify-content: space-evenly;
  }
`

export const FormButton = styled(Button)<{ submitting?: boolean }>`
  border: 0;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  padding: 0.5rem;

  height: inherit;
  width: inherit;
  position: relative;

  ${({ theme, submitting }) => css`
    border: 2px solid ${theme.colors.tertiary};
    color: ${submitting ? 'transparent' : 'inherit'};

    &:hover:disabled {
      color: ${submitting ? 'transparent' : 'inherit'};
    }

    span {
      display: ${submitting ? 'inline-block' : 'none'};
      animation: 1.5s linear infinite ${spinnerAnimation};
      border: solid 5px ${theme.colors.light};
      border-bottom-color: ${theme.colors.secondary};
      border-radius: 50%;
      content: '';
      height: 30px;
      width: 30px;
      position: absolute;
      top: 5%;
      left: 35%;
    }
  `}
`

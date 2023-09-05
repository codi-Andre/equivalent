import styled, { css, keyframes } from 'styled-components'
import { Button } from '@/components/Button/Button.styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Taskbar = styled.div`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 10px;
    height: 50px;
    min-width: 200px;
    padding: 8px;
    border: none;
    font-size: small;

    ${({ theme }) => css`
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.grayLight};

      &::placeholder {
        opacity: 1;
      }

      :focus {
        box-shadow: 0 0 0 2px ${theme.colors.secondary};
      }
    `}
  }
`

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Trigger = styled.button<{ isNegative?: boolean }>`
  height: 50px;
  width: 128px;
  border-radius: 8px;
  border: 0;

  cursor: pointer;
  font-weight: bold;

  ${({ theme, isNegative }) => css`
    color: ${theme.colors.secondary};

    &:focus,
    &:hover {
      border: 2px solid
        ${isNegative ? theme.colors.danger : theme.colors.accent};
    }

    &:disabled {
      background-color: ${theme.colors.tertiary};
    }

    &:disabled:hover,
    &:disabled:active {
      cursor: not-allowed;
      background-color: ${theme.colors.tertiary};
      color: ${theme.colors.secondary};
    }

    &:active {
      border: 2px solid
        ${isNegative ? theme.colors.danger : theme.colors.accent};
      background-color: ${isNegative
        ? theme.colors.danger
        : theme.colors.accent};
      color: ${theme.colors.light};
    }
  `}
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  border-radius: 16px;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.light};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    margin: 1rem;
  }
`

export const Description = styled(Dialog.Description)`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 60%;
  margin-bottom: 24px;
  font-size: 0.9rem;
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

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px ${props => props.theme.colors.accent};
  }
`

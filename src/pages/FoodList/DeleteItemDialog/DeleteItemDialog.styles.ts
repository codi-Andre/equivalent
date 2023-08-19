import styled, { css, keyframes } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const BaseButton = styled.button<{ isNegative?: boolean }>`
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

export const Trigger = styled(BaseButton)`
  height: 3rem;
  width: 3rem;
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
  p {
    text-align: center;
    margin: 1rem;
  }
  div {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`

export const FormButton = styled(BaseButton)<{ submitting?: boolean }>`
  padding: 0.5rem;
  height: 3rem;
  width: 4rem;
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
      top: 15%;
      left: 25%;
    }
  `}
`

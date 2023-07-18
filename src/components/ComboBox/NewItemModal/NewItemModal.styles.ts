import { Button } from '@/components/Button/Button.styles'
import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Trigger = styled.button`
  border: none;
  margin: 2px;
  width: 30px;
  height: 30px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.secondary};
  }
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

export const FormButton = styled(Button)`
  border: 0;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  padding: 0.5rem;
  border: 2px solid #e9e9ed;

  height: inherit;
  width: inherit;
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

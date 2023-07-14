import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Trigger = styled.button``

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  border-radius: 16px;
  padding: 2rem 2.5rem;
  background-color: ${props => props.theme.colors.light};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    margin: 1rem;
  }

  form {
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
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`

import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Trigger = styled.button`
  margin: 2px;
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
  padding: 2rem 2.5rem;
  background-color: ${props => props.theme.colors.light};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    margin: 1rem;
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

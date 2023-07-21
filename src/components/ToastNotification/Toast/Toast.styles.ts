import { ToastStatus } from '@/contexts'
import styled, { css, keyframes } from 'styled-components'

const slideAnimation = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`

export const ToastContainer = styled.div<{ type: ToastStatus }>`
  position: relative;
  padding: 1.5rem;
  border-radius: 6px;

  animation: ${slideAnimation} 250ms;
  transition: transform 250ms;
  & + & {
    margin-top: 0.5rem;
  }
  background-color: ${props => props.theme.colors.light};
  box-shadow: 0 0 6px ${props => props.theme.colors.grayDark};

  ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return css`
          border-left: solid 8px ${theme.colors.accent};

          & div span:first-child {
            color: ${theme.colors.accent};
          }
        `
      case 'failure':
        return css`
          border-left: solid 8px ${theme.colors.danger};

          & div span:first-child {
            color: ${theme.colors.danger};
          }
        `
      case 'warning':
        return css`
          border-left: solid 8px ${theme.colors.warning};

          & div span:first-child {
            color: ${theme.colors.danger};
          }
        `
      case 'info':
        return css`
          border-left: solid 8px skyblue;

          & div span:first-child {
            color: ${theme.colors.danger};
          }
        `
      default:
        return css`
          border-left: solid 8px ${theme.colors.dark};
        `
    }
  }}
`

export const Message = styled.div`
  display: flex;
  gap: 1rem;

  p {
    margin-top: 4px;
  }
`

export const ToastCloseBtn = styled.button`
  position: absolute;
  top: 0rem;
  right: 1.5rem;
  padding: 0.5rem;
  line-height: 1;
  height: 1rem;
  width: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`

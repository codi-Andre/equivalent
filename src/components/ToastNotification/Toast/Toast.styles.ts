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

const progressBarAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`

export const ToastContainer = styled.div<{ type: ToastStatus }>`
  & + & {
    margin-top: 0.5rem;
  }

  position: relative;
  border-radius: 6px;

  animation: ${slideAnimation} 250ms;
  transition: transform 250ms;

  background-color: ${props => props.theme.colors.light};
  box-shadow: 0 0 6px ${props => props.theme.colors.grayDark};

  ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return css`
          & div span:first-child {
            color: ${theme.colors.accent};
          }
        `
      case 'failure':
        return css`
          & div span:first-child {
            color: ${theme.colors.danger};
          }
        `
      case 'warning':
        return css`
          & div span:first-child {
            color: ${theme.colors.danger};
          }
        `
      case 'info':
        return css`
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
  padding: 1.5rem;

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

export const ProgressBar = styled.div<{ type: ToastStatus }>`
  position: relative;
  border-radius: 0 0 6px 6px;
  width: 100%;

  div {
    border-bottom-left-radius: 6px;
    position: absolute;
    top: -8px;
    left: 0;
    height: 8px;
    width: 100%;
    animation: ${progressBarAnimation} 10s linear 1;

    ${({ theme, type }) => {
      switch (type) {
        case 'success':
          return css`
            background-color: ${theme.colors.accent};
          `
        case 'failure':
          return css`
            background-color: ${theme.colors.danger};
          `
        case 'warning':
          return css`
            background-color: ${theme.colors.warning};
          `
        case 'info':
          return css`
            background-color: skyblue;
          `
        default:
          return css`
            background-color: transparent;
          `
      }
    }}
  }
`

import styled, { css, keyframes } from 'styled-components'

const slideAnimation = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`
export const ToastContainer = styled.div`
  position: relative;
  padding: 1.5rem;
  border-radius: 0.5rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.grayDark};
    box-shadow: 0 0 0 2px ${theme.colors.accent};
  `}

  & + & {
    margin-top: 0.5rem;
  }
  transition: transform 250ms;
  animation: ${slideAnimation} 250ms;
`

export const Message = styled.div`
  display: flex;
  gap: 1rem;
  align-items: top;
`

export const ToastCloseBtn = styled.button`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  padding: 0;
  line-height: 1;
  height: 1em;
  width: 1em;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`

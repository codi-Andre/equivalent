import styled, { css, keyframes } from 'styled-components'

const slideAnimation = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`
export const ToastContainer = styled.div<{ type: number }>`
  position: relative;
  padding: 1.5rem;
  border-radius: 6px;

  ${({ theme, type }) => css`
    background-color: ${theme.colors.light};
    border-left: solid 8px ${theme.colors.accent};
    box-shadow: 0 0 6px ${theme.colors.grayDark};
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

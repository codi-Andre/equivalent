import styled from 'styled-components'

export const ToastListContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  scrollbar-width: 0.35rem;
  padding: 1rem;
  width: 100%;
  max-width: 400px;
  max-height: 100vh;
  overflow: hidden auto;

  z-index: 3;
`

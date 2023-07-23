import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(500px, 1fr) 1fr;
  grid-template-rows: min-content 1fr;

  height: 100vh;

  header {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  aside {
    grid-column: 2/3;
    grid-row: 1/3;
  }
`

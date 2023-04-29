import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(500px, 1fr) 1fr;
  grid-template-rows: min-content 1fr;

  height: 100vh;
`

export const Content = styled.main`
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.light};

  h2,
  p {
    text-align: center;
    margin: 0.2rem;
  }
`

export const TableContainer = styled.div`
  overflow: scroll;
  padding: 0.5rem;

  table {
    border-collapse: separate;
    border-spacing: 0 0.1rem;
    text-align: center;

    th,
    td {
      padding: 0.3rem;
      background: ${({ theme }) => theme.colors.grayLight};
    }
    th:first-child,
    td:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    th:last-child,
    td:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

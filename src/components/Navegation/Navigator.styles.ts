import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.accent};
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  nav {
    display: flex;
    gap: 32px;
  }

  a {
    color: ${({ theme }) => theme.colors.dark};
    padding: 0.5rem;
    border-radius: 9999px;
  }

  a:focus {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.light};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.light};
  }

  a.active {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.light};
  }
`

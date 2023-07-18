import styled, { css } from 'styled-components'

export const SearchInput = styled.input`
  height: 30px;
  font-size: small;
  margin: 2px;
  border: none;
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.colors.secondary};

    :focus {
      box-shadow: 0 0 0 2px ${theme.colors.secondary};
    }
  `}
`

import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.label`
  margin: 4px;
  font-size: small;
  font-weight: bold;
`

export const Selector = styled.input`
  border-radius: 10px;
  height: 50px;
  min-width: 200px;
  padding: 8px;
  border: none;
  font-size: small;

  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.grayLight};

    &::placeholder {
      opacity: 1;
    }

    :focus {
      box-shadow: 0 0 0 2px ${theme.colors.secondary};
    }
  `}
`

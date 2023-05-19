import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h5`
  margin: 4px;
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

    :focus {
      box-shadow: 0 0 0 2px ${theme.colors.secondary};
    }
  `}
`

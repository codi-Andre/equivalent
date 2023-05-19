import styled, { css } from 'styled-components'

export const FormContainer = styled.form``

export const Selector = styled.input`
  border-radius: 10px;
  height: 50px;
  min-width: 200px;
  border: none;
  padding: 8px;
  font-size: small;

  :focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondary};
  }

  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.grayLight};
  `}
`

export const Quantity = styled(Selector)``

export const Button = styled.button`
  height: 50px;
  width: 128px;
  border-radius: 8px;
  border: 0;
  color: ${({ theme }) => theme.colors.secondary};

  cursor: pointer;
  font-weight: bold;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`

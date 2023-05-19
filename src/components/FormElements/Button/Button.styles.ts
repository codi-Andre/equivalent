import styled, { css } from 'styled-components'

interface StyledButtonProps {
  isNegative?: boolean
}

export const Button = styled.button<StyledButtonProps>`
  height: 50px;
  width: 128px;
  border-radius: 8px;
  border: 0;
  color: ${({ theme }) => theme.colors.secondary};

  cursor: pointer;
  font-weight: bold;

  &:hover {
    ${({ theme, isNegative }) => css`
      border: 2px solid
        ${isNegative ? theme.colors.danger : theme.colors.accent};
    `}
  }

  :active {
    ${({ theme, isNegative }) => css`
      border: 2px solid
        ${isNegative ? theme.colors.danger : theme.colors.accent};
      background-color: ${isNegative
        ? theme.colors.danger
        : theme.colors.accent};
      color: ${theme.colors.light};
    `}
  }
`

import styled, { css } from 'styled-components'

interface StyledButtonProps {
  isNegative?: boolean
}

export const Button = styled.button<StyledButtonProps>`
  height: 50px;
  width: 128px;
  border-radius: 8px;
  border: 0;

  cursor: pointer;
  font-weight: bold;

  ${({ theme, isNegative }) => css`
    color: ${theme.colors.secondary};

    &:hover {
      border: 2px solid
        ${isNegative ? theme.colors.danger : theme.colors.accent};
    }

    &:active {
      border: 2px solid
        ${isNegative ? theme.colors.danger : theme.colors.accent};
      background-color: ${isNegative
        ? theme.colors.danger
        : theme.colors.accent};
      color: ${theme.colors.light};
    }
  `}
`

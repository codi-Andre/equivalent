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

    &:focus,
    &:hover {
      border: 2px solid
        ${isNegative ? theme.colors.danger : theme.colors.accent};
    }

    &:disabled {
      background-color: #e9e9ed;
    }

    &:disabled:hover,
    &:disabled:active {
      cursor: not-allowed;
      background-color: #e9e9ed;
      color: ${theme.colors.secondary};
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

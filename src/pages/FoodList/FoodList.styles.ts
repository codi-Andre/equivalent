import styled, { css } from 'styled-components'

export const Container = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const List = styled.ul`
  flex: 1;
  max-height: 70vh;
  overflow-y: auto;
  list-style-type: none;
  border-radius: 6px;

  li {
    font-size: larger;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 2px solid ${props => props.theme.colors.tertiary};
  }

  li:hover {
    background-color: ${props => props.theme.colors.grayLight};
  }
`

export const TrashButton = styled.button<{ isNegative?: boolean }>`
  height: 3.125rem;
  width: 3.125rem;
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
      background-color: ${theme.colors.tertiary};
    }

    &:disabled:hover,
    &:disabled:active {
      cursor: not-allowed;
      background-color: ${theme.colors.tertiary};
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

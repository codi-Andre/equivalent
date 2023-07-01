import styled, { css } from 'styled-components'

export const Option = styled.li`
  padding: 0.4rem 0.2rem;
  ${({ theme }) => css`
    &.option-active,
    &.option-selected {
      background-color: ${theme.colors.accent};
    }
  `}
`

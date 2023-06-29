import styled, { css } from 'styled-components'

export const Display = styled.div<{ popupExpanded: boolean }>`
  border: none;
  border-radius: 10px;
  height: 50px;
  min-width: 210px;

  display: flex;
  align-items: center;
  padding-left: 8px;
  font-size: small;

  &:hover {
    cursor: pointer;
  }

  ${({ theme, popupExpanded }) => css`
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.grayLight};
    ${popupExpanded && `box-shadow: 0 0 0 2px ${theme.colors.secondary}`}};
    
    :focus {
      box-shadow: 0 0 0 2px ${theme.colors.secondary};
    }
  `}
`

export const Button = styled.button`
  height: 50px;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  right: 0;

  &:hover {
    cursor: pointer;
  }
`

import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Title = styled.label`
  margin: 4px;
  font-size: small;
  font-weight: bold;
`

export const Popup = styled.div<{ isExpanded: boolean }>`
  width: 214px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  padding: 0.2rem;

  position: absolute;
  left: -2px;
  top: 65px;
  z-index: 1;

  flex-direction: column;

  ${({ theme, isExpanded }) => css`
    display: ${isExpanded ? 'flex' : 'none'};

    border-inline: solid 2px ${theme.colors.secondary};
    border-bottom: solid 2px ${theme.colors.secondary};
    background-color: ${theme.colors.grayLight};
  `}
`

export const FilterStatus = styled.div`
  padding: 0.2rem;
  &.visually-hidden {
    opacity: 0;
    height: 0px;
    padding: 0;
  }
`

import styled from 'styled-components'

export const ListBox = styled.ul`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  max-height: 150px;
  overflow-y: auto;

  list-style-type: none;

  &:hover {
    cursor: pointer;
  }
`

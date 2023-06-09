import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.label`
  flex: 1;
`

export const Icon = styled.div`
  height: 48px;
  width: 48px;
  background-color: brown;
`
export const Content = styled.div`
  height: 50px;
  width: 200px;
  background-color: lightblue;
  display: flex;
  align-items: center;
`
export const ContentListWrapper = styled.div``

export const ContentList = styled.div`
  height: 150px;
  width: 200px;
  background-color: orange;
  overflow-y: auto;
  position: absolute;
`
export const Item = styled.div<{ isSelected: boolean }>`
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.accent : 'transpatent'};
`

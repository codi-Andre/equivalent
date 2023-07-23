import styled from 'styled-components'

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  gap: 32px;
`

export const Title = styled.h1`
  text-align: center;
`

export const Subtitle = styled.h3`
  text-align: center;
`

export const Row = styled.div<{ gap: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap}px;
`

export const ResultTitle = styled.div`
  display: flex;
  flex: 1;
  padding-top: 23px;
  min-width: 200px;
  font-size: large;
  font-weight: bold;
`

export const Result = styled.p`
  flex: 1;
  padding-left: 4px;
  font-size: large;
  font-weight: bold;
`

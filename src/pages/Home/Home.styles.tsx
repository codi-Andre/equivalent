import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 500px;
`

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  gap: 32px;

  flex: 1;
`
export const Title = styled.h1`
  text-align: center;
`

export const Subtitle = styled.h3`
  text-align: center;
`

export const ImageWrapper = styled.div`
  flex: 1;
  background-color: aliceblue;
`
export const Row = styled.div<{ gap: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aliceblue; */
  gap: ${({ gap }) => gap}px;
`
export const ResultTitle = styled.label`
  flex: 1;
  font-size: large;
  font-weight: bold;
`

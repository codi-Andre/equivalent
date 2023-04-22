import styled, { css } from 'styled-components'

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

export const Navigator = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  height: 70px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  gap: 32px;

  flex: 1;
  background-color: ${({ theme }) => theme.colors.light};
`
export const Title = styled.h1`
  text-align: center;
`

export const Subtitle = styled.h5`
  text-align: center;
`

export const Selector = styled.input`
  border-radius: 10px;
  height: 50px;
  min-width: 200px;
  border: none;
  padding: 8px;
  font-size: small;

  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.grayLight};
  `}
`
export const Quantity = styled.input`
  border-radius: 10px;
  height: 50px;
  min-width: 200px;
  border: none;
  padding: 8px;
  font-size: small;

  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.grayLight};
  `}
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 32px;
`

export const Button = styled.button`
  height: 50px;
  width: 128px;
  border-radius: 8px;
  border: 0;
  color: ${({ theme }) => theme.colors.secondary};

  cursor: pointer;
  font-weight: bold;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`

export const ImageWrapper = styled.div`
  flex: 1;
  background-color: aliceblue;
`

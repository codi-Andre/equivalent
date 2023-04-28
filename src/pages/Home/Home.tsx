import {
  Navigator,
  Button,
  ButtonsContainer,
  Quantity,
  Selector,
} from '@components'
import {
  Container,
  Content,
  ContentWrapper,
  Subtitle,
  Title,
} from './Home.styles'
import { Slider } from './slider/Slider'

function Home() {
  return (
    <Container>
      <ContentWrapper>
        <Navigator />
        <Content>
          <Title>Seja bem vindo a nossa calculadora online</Title>
          <Subtitle>Por favor insira os dados abaixo</Subtitle>
          {/* Seletor de referencia */}
          <Selector list="food" />

          <datalist id="food">
            <option value="Arroz" />
            <option value="Feijão" />
            <option value="Purê" />
          </datalist>

          {/* Quantidade  */}
          <Quantity />
          {/* Seletor da substituinte */}
          <Selector list="food" />

          <ButtonsContainer>
            {/* Botão calcular */}
            <Button>Calcular</Button>
            {/* Botao limpar */}
            <Button>Limpar</Button>
          </ButtonsContainer>
        </Content>
      </ContentWrapper>
      <Slider />
    </Container>
  )
}

export default Home

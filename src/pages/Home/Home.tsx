import { Navigator, Quantity, Selector } from '@components'
import locale from '@/assets/locale.json'
import { Button } from '@/components/FormElements'
import {
  Container,
  Content,
  ContentWrapper,
  Subtitle,
  Title,
  ButtonsContainer,
} from './Home.styles'
import { Slider } from './slider/Slider'

function Home() {
  return (
    <Container>
      <ContentWrapper>
        <Navigator />
        <Content>
          <Title>{locale.welcome}</Title>
          <Subtitle>{locale.insertData}</Subtitle>
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
            <Button isNegative>Limpar</Button>
          </ButtonsContainer>
        </Content>
      </ContentWrapper>
      <Slider />
    </Container>
  )
}

export default Home

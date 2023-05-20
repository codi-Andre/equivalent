import { Navigator, Selector, Button, FoodDataList } from '@components'
import locale from '@/assets/locale.json'
import {
  Container,
  Content,
  ContentWrapper,
  Subtitle,
  Title,
  ButtonsContainer,
} from './Home.styles'
import { Slider } from './slider/Slider'
import { FormEvent } from 'react'

function Home() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    console.log(formData)

    event.currentTarget.reset()
  }

  return (
    <Container>
      <ContentWrapper>
        <Navigator />
        <Content onSubmit={handleSubmit}>
          <Title>{locale.welcome}</Title>
          <Subtitle>{locale.insertData}</Subtitle>

          <FoodDataList />

          <Selector
            name="baseFood"
            listId="food"
            title="Alimento base"
          />

          <Selector
            name="quantity"
            title="Quantidade (g)"
            type="number"
          />

          <Selector
            name="substituent"
            listId="food"
            title="Substituinte"
          />

          <ButtonsContainer>
            {/* Botão calcular */}
            <Button type="submit">Calcular</Button>
            {/* Botao limpar */}
            <Button
              type="reset"
              isNegative
            >
              Limpar
            </Button>
          </ButtonsContainer>
        </Content>
      </ContentWrapper>
      <Slider />
    </Container>
  )
}

export default Home

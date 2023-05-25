import { Navigator, Selector, Button, FoodDataList } from '@components'
import locale from '@/assets/locale.json'
import {
  Container,
  Content,
  ContentWrapper,
  Subtitle,
  Title,
  Row,
  ResultTitle,
} from './Home.styles'
import { Slider } from './slider/Slider'
import { FormEvent } from 'react'

function Home() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())
    console.log(formJson)
  }

  return (
    <Container>
      <ContentWrapper>
        <Navigator />
        <Content onSubmit={handleSubmit}>
          <Title>{locale.welcome}</Title>
          <Subtitle>{locale.insertData}</Subtitle>

          <FoodDataList />

          <Row gap={16}>
            <Selector
              name="baseFood"
              listId="food"
              title="Alimento base"
              required
            />

            <Selector
              name="quantity"
              title="Quantidade (g)"
              type="number"
              required
            />
          </Row>

          <Row gap={16}>
            <Selector
              name="Substituint"
              listId="food"
              title="Substituinte"
              required
            />
            <ResultTitle>{`${locale.result}: `}</ResultTitle>
          </Row>

          <Row gap={32}>
            {/* Botão calcular */}
            <Button type="submit">Calcular</Button>
            {/* Botao limpar */}
            <Button
              type="reset"
              isNegative
            >
              Limpar
            </Button>
          </Row>
        </Content>
      </ContentWrapper>
      <Slider />
    </Container>
  )
}

export default Home

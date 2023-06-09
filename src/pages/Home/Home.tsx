import {
  Navigator,
  Selector,
  Button,
  FoodDataList,
  Dropdown,
} from '@components'
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
import { FormEvent, useState } from 'react'
import { useFood } from '@/contexts'
import { formToUserInput } from './Home.utils'
import { Food } from '@/entities/food'

function Home() {
  const { calculateEquivalent, foodList } = useFood()
  const [baseFood, setBaseFood] = useState<Food | undefined>()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Pegando valores do form
    event.preventDefault()
    const form = event.currentTarget

    console.log('escolhido baseFood', baseFood)
    // Convertendo valares para o objeto(formato) que queremos
    const userInput = formToUserInput(form)

    // Calculo do equivalente
    const res = calculateEquivalent(userInput)
    console.log('res', res)
  }

  return (
    <Container>
      <ContentWrapper>
        <Navigator />
        <Content onSubmit={handleSubmit}>
          <Title>{locale.welcome}</Title>
          <Subtitle>{locale.insertData}</Subtitle>

          <Dropdown
            showProp="name"
            list={foodList}
            value={baseFood}
            onChangeValue={setBaseFood}
          />

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
              name="substituint"
              listId="food"
              title="Substituinte"
              required
            />
            <ResultTitle>{`${locale.result}: `}</ResultTitle>
          </Row>

          <Row gap={32}>
            <Button type="submit">Calcular</Button>
            <Button
              type="reset"
              isNegative
              onClick={() => setBaseFood(undefined)}
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

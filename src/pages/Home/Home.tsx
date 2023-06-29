import { Navigator, Selector, Button } from '@components'
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
import { ComboBox } from '@/components/ComboBox/ComboBox'
import { Food } from '@/entities/food'

function Home() {
  const { calculateEquivalent } = useFood()
  const [selectedBaseFood, setSelectedBaseFood] = useState<Food | undefined>(
    undefined,
  )
  const [selectedSubstituint, setSelectedSubstituint] = useState<
    Food | undefined
  >(undefined)

  const { foodList } = useFood()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Pegando valores do form
    event.preventDefault()
    const form = event.currentTarget

    // Convertendo valares para o objeto(formato) que queremos
    const userInput = formToUserInput(
      form,
      selectedBaseFood as Food,
      selectedSubstituint as Food,
    )

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

          <Row gap={16}>
            <ComboBox
              title={locale.baseFoodTitle}
              displayValue={selectedBaseFood}
              selectedValue={setSelectedBaseFood}
              list={foodList}
            />

            <Selector
              name="quantity"
              title={locale.quantitySelector}
              type="number"
              required
            />
          </Row>

          <Row gap={16}>
            <ComboBox
              title={locale.substituintTitle}
              displayValue={selectedSubstituint}
              selectedValue={setSelectedSubstituint}
              list={foodList}
            />
            <ResultTitle>{`${locale.result}: `}</ResultTitle>
          </Row>

          <Row gap={32}>
            <Button
              type="submit"
              disabled={!selectedBaseFood || !selectedSubstituint}
            >
              {locale.calcButton}
            </Button>
            <Button
              type="reset"
              isNegative
              onClick={() => {
                setSelectedBaseFood(undefined)
                setSelectedSubstituint(undefined)
              }}
            >
              {locale.clearButton}
            </Button>
          </Row>
        </Content>
      </ContentWrapper>
      <Slider />
    </Container>
  )
}

export default Home

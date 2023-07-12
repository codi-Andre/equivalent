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
  Result,
} from './Home.styles'
import { Slider } from './slider/Slider'
import { useEffect, useState } from 'react'
import { ComboBox } from '@/components/ComboBox/ComboBox'
import { Food } from '@/entities/food'
import { useFood } from '@/contexts'

function Home() {
  const { foodList, calculateEquivalent } = useFood()
  const [selectedBaseFood, setSelectedBaseFood] = useState<Food | undefined>(
    undefined,
  )
  const [selectedSubstituint, setSelectedSubstituint] = useState<
    Food | undefined
  >(undefined)
  const [quantity, setQuantity] = useState<string>('')
  const [showResult, setShowResult] = useState<number>()

  useEffect(() => {
    setShowResult(undefined)
  }, [selectedBaseFood, selectedSubstituint, quantity])

  function handleSubmit() {
    const userInput = {
      baseFood: selectedBaseFood as Food,
      quantity: Number(quantity),
      substituint: selectedSubstituint as Food,
    }

    // Calculo do equivalente
    const res = calculateEquivalent(userInput)

    setShowResult(res)
  }

  return (
    <Container>
      <ContentWrapper>
        <Navigator />
        <Content>
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
              placeholder={locale.chooseQuantity}
              value={quantity}
              setValue={setQuantity}
              title={locale.quantitySelector}
              type="number"
            />
          </Row>

          <Row gap={16}>
            <ComboBox
              title={locale.substituintTitle}
              displayValue={selectedSubstituint}
              selectedValue={setSelectedSubstituint}
              list={foodList}
            />
            <ResultTitle>
              {`${locale.result}: `}{' '}
              <Result
                role="status"
                aria-live="polite"
              >
                {showResult
                  ? showResult > 1
                    ? showResult + ' ' + locale.resultInGrams
                    : showResult + ' ' + locale.ResultInGram
                  : null}
              </Result>
            </ResultTitle>
          </Row>

          <Row gap={32}>
            <Button
              disabled={!selectedBaseFood || !selectedSubstituint || !quantity}
              onClick={() => handleSubmit()}
            >
              {locale.calcButton}
            </Button>
            <Button
              isNegative
              onClick={() => {
                setSelectedBaseFood(undefined)
                setQuantity('')
                setSelectedSubstituint(undefined)
                setShowResult(undefined)
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

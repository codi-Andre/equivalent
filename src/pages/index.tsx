import Head from 'next/head'
import {
  Button,
  Container,
  Content,
  ContentWrapper,
  ImageWrapper,
  Navigator,
  Quantity,
  Selector,
  Subtitle,
  Title,
} from '@styles/Home.styles'

function Home() {
  return (
    <>
      <Head>
        <title>Equivalent</title>
      </Head>
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
            {/* Botão calcular */}
            <Button>Calcular</Button>
            {/* Botao limpar */}
            <Button>Limpar</Button>
          </Content>
        </ContentWrapper>
        <ImageWrapper />
      </Container>
    </>
  )
}

export default Home

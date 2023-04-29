import { Navigator } from '@components'
import { Container, Content, TableContainer } from './FoodList.styles'
import { SearchForm } from './SearchForm/SearchForm'

export function FoodList() {
  return (
    <Container>
      <Navigator />
      <Content>
        <h2>Lista de alimentos</h2>
        <p>
          Aqui você pode ver a lista de todos os alimentos presentes, pesquisar
          por um alimento especifico, (adicionar e excluir?)
        </p>
        <SearchForm />
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Quantidade(g)</th>
                <th scope="col">Calorias(kcal)</th>
                <th scope="col">Carboidratos(g)</th>
                <th scope="col">Proteínas(g)</th>
                <th scope="col">Gorduras(g)</th>
                <th scope="col">Categoria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Arroz</th>
                <td>100</td>
                <td>200</td>
                <td>30</td>
                <td>2</td>
                <td>1</td>
                <td>rico em carboidratos</td>
              </tr>
              <tr>
                <th scope="row">Abacate</th>
                <td>100</td>
                <td>201</td>
                <td>3</td>
                <td>2</td>
                <td>21</td>
                <td>rico em gorduras</td>
              </tr>
              <tr>
                <th scope="row">Frango</th>
                <td>100</td>
                <td>222</td>
                <td>0</td>
                <td>30</td>
                <td>13</td>
                <td>rico em proteínas</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Content>
    </Container>
  )
}

import { Button, Icon, Selector } from '@/components'
import { SearchFormContainer } from './SearchForm.styles'

export function SearchForm() {
  function handleFoodSearch(data: any) {
    data.preventDefault()
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleFoodSearch}>
      <Selector
        type="text"
        placeholder="Digite o nome de um alimento"
      />
      <Button type="submit">
        Buscar <Icon name="search" />
      </Button>
    </SearchFormContainer>
  )
}

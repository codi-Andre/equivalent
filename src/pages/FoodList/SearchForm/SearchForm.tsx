import { Button, Icon, Selector } from '@/components'
import { SearchFormContainer } from './SearchForm.styles'

import * as Dialog from '@radix-ui/react-dialog'
import { AddFoodModal } from '../AddFoodModal/AddFoodModal'

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
        <Icon name="search" /> Buscar
      </Button>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>
            <Icon name="add" /> Adicionar
          </Button>
        </Dialog.Trigger>

        <AddFoodModal />
      </Dialog.Root>
    </SearchFormContainer>
  )
}

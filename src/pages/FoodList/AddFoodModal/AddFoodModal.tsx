import * as Dialog from '@radix-ui/react-dialog'
import {
  FormContainer,
  CloseButton,
  Content,
  Overlay,
} from './AddFoodModal.styles'
import { Button, Icon, Selector } from '@/components'

export function AddFoodModal() {
  function handleAddFood(data: any) {
    console.log(data)
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Adicione um alimento</Dialog.Title>
        <CloseButton>
          <Icon name="close" />
        </CloseButton>

        <FormContainer onSubmit={handleAddFood}>
          <label>
            Nome:
            <Selector
              type="text"
              placeholder="ex: banana"
            />
          </label>
          <label>
            Quantidade:
            <Selector
              type="text"
              placeholder="ex: 100"
            />
          </label>
          <label>
            Calorias:
            <Selector
              type="text"
              placeholder="ex: 198"
            />
          </label>
          <label>
            Carboidratos:
            <Selector
              type="text"
              placeholder="ex: 30"
            />
          </label>
          <label>
            Proteínas:
            <Selector
              type="text"
              placeholder="ex: 0"
            />
          </label>
          <label>
            Gorduras:
            <Selector
              type="text"
              placeholder="ex: 1"
            />
          </label>
          <label>
            Categoria:
            <Selector
              type="text"
              placeholder="ex: ricos em carboidratos"
            />
          </label>
          <Button type="submit">Adicionar</Button>
        </FormContainer>
      </Content>
    </Dialog.Portal>
  )
}

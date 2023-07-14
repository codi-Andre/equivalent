import { Icon } from '@/components/Icon'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './NewItemModal.styles'
import locale from '@/assets/locale.json'

interface NewItemModalProps {
  title: string
}

export function NewItemModal({ title }: NewItemModalProps) {
  return (
    <Dialog.Root modal>
      <Dialog.Trigger asChild>
        <S.Trigger title={locale.addNewFoodTitle}>
          <Icon
            name="add"
            size={28}
          />
        </S.Trigger>
      </Dialog.Trigger>
      <Dialog.Portal>
        <S.Overlay />
        <S.Content>
          <S.CloseButton>
            <Icon name="close" />
          </S.CloseButton>

          <Dialog.Title>{locale.addNewFoodTitle}</Dialog.Title>

          <form>
            <label htmlFor={`addNewFoodName-${title}`}>
              {locale.addNewFoodName}
            </label>
            <input id={`addNewFoodName-${title}`} />

            <label htmlFor={`addNewFoodQuantity-${title}`}>
              {locale.addNewFoodQuantity}
            </label>
            <input id={`addNewFoodQuantity-${title}`} />

            <label htmlFor={`addNewFoodCalories-${title}`}>
              {locale.addNewFoodCalories}
            </label>
            <input id={`addNewFoodCalories-${title}`} />

            <label htmlFor={`addNewFoodCarbohydrates-${title}`}>
              {locale.addNewFoodCarbohydrates}
            </label>
            <input id={`addNewFoodCarbohydrates-${title}`} />

            <label htmlFor={`addNewFoodFats-${title}`}>
              {locale.addNewFoodFats}
            </label>
            <input id={`addNewFoodFats-${title}`} />

            <label htmlFor={`addNewFoodProteins-${title}`}>
              {locale.addNewFoodProteins}
            </label>
            <input id={`addNewFoodProteins-${title}`} />

            <label htmlFor={`addNewFoodCategory-${title}`}>
              {locale.addNewFoodCategory}
            </label>
            <input id={`addNewFoodCategory-${title}`} />

            <div>
              <button type="submit">{locale.submitButton}</button>
              <button type="reset">{locale.clearButton}</button>
            </div>
          </form>
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

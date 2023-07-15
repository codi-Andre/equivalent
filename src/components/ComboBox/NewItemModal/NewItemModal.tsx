import { Icon } from '@/components/Icon'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './NewItemModal.styles'
import locale from '@/assets/locale.json'
import { useComboBox } from '../ComboBox'
import { FormEvent } from 'react'
import { Food } from '@/entities/food'
import { addFoodToList } from '@/api'

interface NewItemModalProps {
  title: string
  name: string
}

export function NewItemModal({ title, name }: NewItemModalProps) {
  const { setPopupExpanded } = useComboBox()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const newItem = Object.fromEntries(formData.entries())
    const newFood = Object(newItem) as Food

    const response = addFoodToList(newFood)
  }
  return (
    <Dialog.Root modal>
      <Dialog.Trigger asChild>
        <S.Trigger
          title={locale.addNewFoodTitle}
          onKeyDown={e => {
            if (e.code === 'Tab') setPopupExpanded(false)
          }}
        >
          <Icon name="add" />
        </S.Trigger>
      </Dialog.Trigger>
      <Dialog.Portal>
        <S.Overlay />
        <S.Content>
          <S.CloseButton>
            <Icon name="close" />
          </S.CloseButton>

          <Dialog.Title>{locale.addNewFoodTitle}</Dialog.Title>

          <form onSubmit={handleSubmit}>
            <label htmlFor={`addNewFoodName-${title}`}>
              {locale.addNewFoodName}
            </label>
            <input
              id={`addNewFoodName-${title}`}
              type="text"
              name={`name`}
              defaultValue={name}
              required
            />

            <label htmlFor={`addNewFoodQuantity-${title}`}>
              {locale.addNewFoodQuantity}
            </label>
            <input
              id={`addNewFoodQuantity-${title}`}
              type="number"
              name={`quantity`}
              required
            />

            <label htmlFor={`addNewFoodCalories-${title}`}>
              {locale.addNewFoodCalories}
            </label>
            <input
              id={`addNewFoodCalories-${title}`}
              type="number"
              name={`calories`}
              required
            />

            <label htmlFor={`addNewFoodCarbohydrates-${title}`}>
              {locale.addNewFoodCarbohydrates}
            </label>
            <input
              id={`addNewFoodCarbohydrates-${title}`}
              type="number"
              name={`carbohydrates`}
              required
            />

            <label htmlFor={`addNewFoodFats-${title}`}>
              {locale.addNewFoodFats}
            </label>
            <input
              id={`addNewFoodFats-${title}`}
              type="number"
              name={`fats`}
              required
            />

            <label htmlFor={`addNewFoodProteins-${title}`}>
              {locale.addNewFoodProteins}
            </label>
            <input
              id={`addNewFoodProteins-${title}`}
              type="number"
              name={`proteins`}
              required
            />

            <label htmlFor={`addNewFoodCategory-${title}`}>
              {locale.addNewFoodCategory}
            </label>
            <input
              id={`addNewFoodCategory-${title}`}
              type="text"
              name={`category`}
            />

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

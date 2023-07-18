import { Icon } from '@/components/Icon'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './NewItemModal.styles'
import locale from '@/assets/locale.json'
import { useComboBox } from '../ComboBox'
import { FormEvent, RefObject, useState } from 'react'
import { Food } from '@/entities/food'
import { useFood } from '@/contexts'

interface NewItemModalProps {
  id: string
  name: string
  displayRef: RefObject<HTMLDivElement | null>
  newSelectedValue: (food: Food) => void
}

export function NewItemModal({
  id,
  name,
  displayRef,
  newSelectedValue,
}: NewItemModalProps) {
  const { addFood } = useFood()
  const { setPopupExpanded } = useComboBox()

  const [submitting, setSubmitting] = useState<boolean>(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setSubmitting(true)
    const formData = new FormData(event.target as HTMLFormElement)
    const newItem = Object.fromEntries(formData.entries())
    const newFood = Object(newItem) as Food

    const response = await addFood(newFood)
    if (response !== undefined && response.status < 300) {
      newSelectedValue(response.data)
    }
    setSubmitting(false)
  }

  return (
    <Dialog.Root
      modal
      onOpenChange={open => {
        if (open === false) {
          setSubmitting(false)
          displayRef.current?.focus()
        }
      }}
    >
      <Dialog.Trigger asChild>
        <S.Trigger
          title={locale.addNewFoodTitle}
          onKeyDown={e => {
            if (!e.shiftKey && e.code === 'Tab') setPopupExpanded(false)
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
          <S.FormContainer onSubmit={handleSubmit}>
            <label htmlFor={`addNewFoodName-${id}`}>
              {locale.addNewFoodName}
            </label>
            <input
              autoFocus
              id={`addNewFoodName-${id}`}
              type="text"
              name={`name`}
              defaultValue={name}
              required
              disabled={submitting}
            />

            <label htmlFor={`addNewFoodQuantity-${id}`}>
              {locale.addNewFoodQuantity}
            </label>
            <input
              id={`addNewFoodQuantity-${id}`}
              type="number"
              name={`quantity`}
              required
              disabled={submitting}
            />

            <label htmlFor={`addNewFoodCalories-${id}`}>
              {locale.addNewFoodCalories}
            </label>
            <input
              id={`addNewFoodCalories-${id}`}
              type="number"
              name={`calories`}
              required
              disabled={submitting}
            />

            <label htmlFor={`addNewFoodCarbohydrates-${id}`}>
              {locale.addNewFoodCarbohydrates}
            </label>
            <input
              id={`addNewFoodCarbohydrates-${id}`}
              type="number"
              name={`carbohydrates`}
              required
              disabled={submitting}
            />

            <label htmlFor={`addNewFoodFats-${id}`}>
              {locale.addNewFoodFats}
            </label>
            <input
              id={`addNewFoodFats-${id}`}
              type="number"
              name={`fats`}
              required
              disabled={submitting}
            />

            <label htmlFor={`addNewFoodProteins-${id}`}>
              {locale.addNewFoodProteins}
            </label>
            <input
              id={`addNewFoodProteins-${id}`}
              type="number"
              name={`proteins`}
              required
              disabled={submitting}
            />

            <label htmlFor={`addNewFoodCategory-${id}`}>
              {locale.addNewFoodCategory}
            </label>
            <input
              id={`addNewFoodCategory-${id}`}
              type="text"
              name={`category`}
              disabled={submitting}
            />

            <div>
              <S.FormButton
                disabled={submitting}
                type="submit"
              >
                {locale.submitButton}
              </S.FormButton>
              <S.FormButton
                isNegative
                disabled={submitting}
                type="reset"
              >
                {locale.clearButton}
              </S.FormButton>
            </div>
          </S.FormContainer>
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

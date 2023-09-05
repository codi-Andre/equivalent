import { Icon } from '@/components/Icon'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './NewItemModal.styles'
import locale from '@/assets/locale.json'
import { useComboBox } from '../ComboBox'
import { FormEvent, RefObject, useEffect, useState } from 'react'
import { Food } from '@/entities/food'
import { ToastStatus, useFood, useToast } from '@/contexts'

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
  const { newToast } = useToast()

  const [submitting, setSubmitting] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (modalOpen === false) {
      setSubmitting(false)
    }
  }, [modalOpen])

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setSubmitting(true)
    const formData = new FormData(event.target as HTMLFormElement)
    const newItem = Object.fromEntries(formData.entries())
    const newFood = Object(newItem) as Food

    const response = await addFood(newFood)
    if (response !== undefined && response.status < 300) {
      newSelectedValue(response.data)
      newToast(ToastStatus.Success, locale.addFoodNotificationSuccess)
      setModalOpen(false)
      displayRef.current?.focus()
    } else {
      newToast(ToastStatus.Failure, locale.addFoodNotificationFailure)
    }
    setSubmitting(false)
  }

  return (
    <Dialog.Root
      open={modalOpen}
      onOpenChange={setModalOpen}
    >
      <Dialog.Trigger asChild>
        <S.Trigger
          title={locale.addNewFoodTitle}
          onKeyDown={e => {
            if (!e.shiftKey && e.code === 'Tab') {
              setPopupExpanded(false)
            } else if (e.code === 'Escape') {
              setPopupExpanded(false)
              displayRef.current?.focus()
            }
          }}
        >
          <Icon name="add" />
        </S.Trigger>
      </Dialog.Trigger>
      <Dialog.Portal>
        <S.Overlay />
        <S.Content onEscapeKeyDown={() => setPopupExpanded(true)}>
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

            <label htmlFor={`addNewFoodCalories-${id}`}>
              {locale.addNewFoodCalories}
            </label>
            <input
              id={`addNewFoodCalories-${id}`}
              type="number"
              name={`calories`}
              step={0.01}
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
              step={0.01}
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
              step={0.01}
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
              step={0.01}
              required
              disabled={submitting}
            />

            <label htmlFor={`addNewFoodGroup-${id}`}>
              {locale.addNewFoodGroup}
            </label>
            <input
              id={`addNewFoodGroup-${id}`}
              type="text"
              name={`category`}
              disabled={submitting}
            />

            <div>
              <S.FormButton
                submitting={submitting}
                disabled={submitting}
                type="submit"
              >
                {locale.submitButton}
                <span></span>
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

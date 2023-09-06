import { Icon } from '@/components/Icon'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './NewItemModal.styles'
import locale from '@/assets/locale.json'
import { useComboBox } from '../ComboBox'
import { FormEvent, RefObject, useEffect, useState } from 'react'
import { Food } from '@/entities/food'
import { ToastStatus, useFood, useToast } from '@/contexts'
import { FormToAddFood } from '@/components/FormToAddFood/FormToAddFood'

interface NewItemModalProps {
  id: string
  name: string
  displayRef: RefObject<HTMLDivElement | null>
  newSelectedValue: (food: Food) => void
}

export function NewItemModal({
  name,
  displayRef,
  newSelectedValue,
}: NewItemModalProps) {
  const { addFood } = useFood()
  const { setPopupExpanded } = useComboBox()
  const { newToast } = useToast()

  const [submitting, setSubmitting] = useState(false)
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
    newFood.quantity = 100

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
          <S.Description>{locale.addNewFoodDescription}</S.Description>

          <FormToAddFood
            handleSubmit={handleSubmit}
            id="combo-box"
            isSubmitting={submitting}
            newFoodName={name}
          />
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

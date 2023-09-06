import * as S from './Taskbar.styles'
import locale from '@/assets/locale.json'
import { Icon } from '@/components/Icon'
import * as Dialog from '@radix-ui/react-dialog'
import { FormEvent, useState } from 'react'
import { ToastStatus, useFood, useToast } from '@/contexts'
import { Food } from '@/entities/food'
import { FormToAddFood } from '@/components'

interface TaskbarProps {
  query: string
  setQuery: (e: string) => void
}

export function Taskbar({ query, setQuery }: TaskbarProps) {
  const { addFood } = useFood()
  const { newToast } = useToast()

  const [submitting, setSubmitting] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setSubmitting(true)
    const formData = new FormData(event.target as HTMLFormElement)
    const newItem = Object.fromEntries(formData.entries())
    const newFood = Object(newItem) as Food
    newFood.quantity = 100

    const response = await addFood(newFood)
    if (response !== undefined && response.status < 300) {
      newToast(ToastStatus.Success, locale.addFoodNotificationSuccess)
      setIsModalOpen(false)
    } else {
      newToast(ToastStatus.Failure, locale.addFoodNotificationFailure)
    }
    setSubmitting(false)
  }

  return (
    <S.Taskbar>
      <input
        type="text"
        placeholder={locale.searchFood}
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <Dialog.Root
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      >
        <Dialog.Trigger asChild>
          <S.Trigger>{locale.submitButton}</S.Trigger>
        </Dialog.Trigger>
        <Dialog.Portal>
          <S.Overlay />
          <S.Content>
            <S.CloseButton>
              <Icon name="close" />
            </S.CloseButton>

            <Dialog.Title>{locale.addNewFoodTitle}</Dialog.Title>
            <S.Description>{locale.addNewFoodDescription}</S.Description>

            <FormToAddFood
              handleSubmit={handleSubmit}
              id="task-bar"
              isSubmitting={submitting}
              newFoodName={query}
            />
          </S.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </S.Taskbar>
  )
}

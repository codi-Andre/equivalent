import { Icon } from '@/components/Icon'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './NewItemModal.styles'
import locale from '@/assets/locale.json'
import { useComboBox } from '../ComboBox'
import { FormEvent, useState } from 'react'
import { Food } from '@/entities/food'
import { addFoodToList } from '@/api'
import { FormTemplate } from './FormTemplate/FormTemplate'
import { LoadingTemplate } from './LoadingTemplate/LoadingTemplate'
import { useFood } from '@/contexts'

interface NewItemModalProps {
  id: string
  name: string
  newSelectedValue: (food: Food) => void
}

export function NewItemModal({
  id,
  name,
  newSelectedValue,
}: NewItemModalProps) {
  const { updateList } = useFood()

  const { setPopupExpanded } = useComboBox()
  const [requestStatus, setRequestStatus] = useState<number | undefined>()
  const [loadStatus, setLoadStatus] = useState<'start' | 'loading' | 'ready'>(
    'start',
  )

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setLoadStatus('loading')
    const formData = new FormData(event.target as HTMLFormElement)
    const newItem = Object.fromEntries(formData.entries())
    const newFood = Object(newItem) as Food

    const response = await addFoodToList(newFood)
    if (response !== undefined && response < 300) newSelectedValue(newFood)
    setRequestStatus(response)
    setLoadStatus('ready')
  }

  function handleLoadingTemplate() {
    setLoadStatus('start')
    setRequestStatus(undefined)
  }

  return (
    <Dialog.Root
      modal
      onOpenChange={open => {
        if (open === false) {
          setLoadStatus('start')
          setRequestStatus(undefined)
          updateList()
        }
      }}
    >
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
          {loadStatus === 'start' ? (
            <FormTemplate
              id={id}
              foodName={name}
              handleSubmit={handleSubmit}
            />
          ) : (
            <LoadingTemplate
              status={loadStatus}
              success={requestStatus}
              onClick={handleLoadingTemplate}
            />
          )}
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

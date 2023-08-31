import { Icon } from '@/components'
import * as S from './DeleteItemDialog.styles'
import * as Dialog from '@radix-ui/react-dialog'
import locale from '@/assets/locale.json'
import { useEffect, useState } from 'react'
import { ToastStatus, useFood, useToast } from '@/contexts'
import { showDeleteText } from './DeleteItemDialog.utils'

interface DeleteItemDialogProps {
  itemName: string
  itemId: string
}

export function DeleteItemDialog({ itemName, itemId }: DeleteItemDialogProps) {
  const { removeFood } = useFood()
  const { newToast } = useToast()

  const [submitting, setSubmitting] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if (!isOpen) setSubmitting(false)
  }, [isOpen])

  async function handleDeleteItem(id: string) {
    setSubmitting(true)

    const response = await removeFood(id)

    if (response !== undefined && response.status < 300) {
      newToast(ToastStatus.Failure, locale.deleteFoodNotificationSuccess)
      setIsOpen(false)
    } else {
      newToast(ToastStatus.Failure, locale.deleteFoodNotificationFailure)
      setIsOpen(false)
    }
  }

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      modal
    >
      <Dialog.Trigger asChild>
        <S.Trigger
          isNegative
          title={`${locale.deleteButton} ${itemName}`}
        >
          <Icon name="delete" />
        </S.Trigger>
      </Dialog.Trigger>
      <Dialog.Portal>
        <S.Overlay />
        <S.Content>
          <Dialog.Title>{locale.deleteFoodNotificationQuestion}</Dialog.Title>
          <Dialog.Description>
            {showDeleteText(locale.deletePrefix, itemName, locale.deleteSufix)}
          </Dialog.Description>
          <div>
            <S.FormButton
              onClick={() => handleDeleteItem(itemId)}
              submitting={submitting}
              disabled={submitting}
              isNegative
            >
              {locale.acceptButton}
              <span></span>
            </S.FormButton>
            <Dialog.Close asChild>
              <S.FormButton disabled={submitting}>
                {locale.declineButton}
              </S.FormButton>
            </Dialog.Close>
          </div>
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

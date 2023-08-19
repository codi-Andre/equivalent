import * as S from './Taskbar.styles'
import locale from '@/assets/locale.json'
import { Icon } from '@/components/Icon'
import * as Dialog from '@radix-ui/react-dialog'
import { FormEvent, useState } from 'react'
import { ToastStatus, useFood, useToast } from '@/contexts'
import { Food } from '@/entities/food'

interface TaskbarProps {
  query: string
  setQuery: (e: string) => void
}

export function Taskbar({ query, setQuery }: TaskbarProps) {
  const { addFood } = useFood()
  const { newToast } = useToast()

  const [submitting, setSubmitting] = useState<boolean>(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setSubmitting(true)
    const formData = new FormData(event.target as HTMLFormElement)
    const newItem = Object.fromEntries(formData.entries())
    const newFood = Object(newItem) as Food

    const response = await addFood(newFood)
    if (response !== undefined && response.status < 300) {
      newToast(ToastStatus.Success, locale.addFoodNotificationSuccess)
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

      <Dialog.Root>
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
            <S.FormContainer onSubmit={handleSubmit}>
              <label htmlFor={`addNewFoodName-pg2`}>
                {locale.addNewFoodName}
              </label>
              <input
                autoFocus
                id={`addNewFoodName-pg2`}
                type="text"
                name={`name`}
                defaultValue={query}
                required
                disabled={submitting}
              />

              <label htmlFor={`addNewFoodQuantity-pg2`}>
                {locale.addNewFoodQuantity}
              </label>
              <input
                id={`addNewFoodQuantity-pg2`}
                type="number"
                name={`quantity`}
                required
                disabled={submitting}
              />

              <label htmlFor={`addNewFoodCalories-pg2`}>
                {locale.addNewFoodCalories}
              </label>
              <input
                id={`addNewFoodCalories-pg2`}
                type="number"
                name={`calories`}
                required
                disabled={submitting}
              />

              <label htmlFor={`addNewFoodCarbohydrates-pg2`}>
                {locale.addNewFoodCarbohydrates}
              </label>
              <input
                id={`addNewFoodCarbohydrates-pg2`}
                type="number"
                name={`carbohydrates`}
                required
                disabled={submitting}
              />

              <label htmlFor={`addNewFoodFats-pg2`}>
                {locale.addNewFoodFats}
              </label>
              <input
                id={`addNewFoodFats-pg2`}
                type="number"
                name={`fats`}
                required
                disabled={submitting}
              />

              <label htmlFor={`addNewFoodProteins-pg2`}>
                {locale.addNewFoodProteins}
              </label>
              <input
                id={`addNewFoodProteins-pg2`}
                type="number"
                name={`proteins`}
                required
                disabled={submitting}
              />

              <label htmlFor={`addNewFoodCategory-pg2`}>
                {locale.addNewFoodCategory}
              </label>
              <input
                id={`addNewFoodCategory-pg2`}
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
    </S.Taskbar>
  )
}

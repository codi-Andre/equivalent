import locale from '@/assets/locale.json'
import * as S from './FormToAddFood.styles'
import { FormEvent } from 'react'

interface FormToAddFoodProps {
  id: string
  newFoodName?: string
  isSubmitting: boolean
  handleSubmit: (event: FormEvent) => void
}

export function FormToAddFood({
  id,
  newFoodName,
  isSubmitting,
  handleSubmit,
}: FormToAddFoodProps) {
  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <label htmlFor={`addNewFoodName-${id}`}>{locale.addNewFoodName}</label>
      <input
        autoFocus
        id={`addNewFoodName-${id}`}
        type="text"
        name={`name`}
        defaultValue={newFoodName}
        required
        disabled={isSubmitting}
      />

      <label htmlFor={`addNewFoodCalories-${id}`}>
        {locale.addNewFoodCalories}
      </label>
      <input
        id={`addNewFoodCalories-${id}`}
        type="number"
        name={`calories`}
        step={0.01}
        min={0}
        required
        disabled={isSubmitting}
      />

      <label htmlFor={`addNewFoodCarbohydrates-${id}`}>
        {locale.addNewFoodCarbohydrates}
      </label>
      <input
        id={`addNewFoodCarbohydrates-${id}`}
        type="number"
        name={`carbohydrates`}
        step={0.01}
        min={0}
        required
        disabled={isSubmitting}
      />

      <label htmlFor={`addNewFoodFats-${id}`}>{locale.addNewFoodFats}</label>
      <input
        id={`addNewFoodFats-${id}`}
        type="number"
        name={`fats`}
        step={0.01}
        min={0}
        required
        disabled={isSubmitting}
      />

      <label htmlFor={`addNewFoodProteins-${id}`}>
        {locale.addNewFoodProteins}
      </label>
      <input
        id={`addNewFoodProteins-${id}`}
        type="number"
        name={`proteins`}
        step={0.01}
        min={0}
        required
        disabled={isSubmitting}
      />

      <label htmlFor={`addNewFoodGroup-${id}`}>{locale.addNewFoodGroup}</label>
      <input
        id={`addNewFoodGroup-${id}`}
        type="text"
        name={`category`}
        disabled={isSubmitting}
      />

      <div>
        <S.FormButton
          submitting={isSubmitting}
          disabled={isSubmitting}
          type="submit"
        >
          {locale.submitButton}
          <span></span>
        </S.FormButton>
        <S.FormButton
          isNegative
          disabled={isSubmitting}
          type="reset"
        >
          {locale.clearButton}
        </S.FormButton>
      </div>
    </S.FormContainer>
  )
}

import { FormEvent } from 'react'
import locale from '@/assets/locale.json'
import { FormContainer } from './FormTemplate.styles'

interface FormTemplateProps {
  id: string
  foodName: string
  handleSubmit: (e: FormEvent) => void
}

export function FormTemplate({
  id,
  foodName,
  handleSubmit,
}: FormTemplateProps) {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor={`addNewFoodName-${id}`}>{locale.addNewFoodName}</label>
      <input
        id={`addNewFoodName-${id}`}
        type="text"
        name={`name`}
        defaultValue={foodName}
        required
      />

      <label htmlFor={`addNewFoodQuantity-${id}`}>
        {locale.addNewFoodQuantity}
      </label>
      <input
        id={`addNewFoodQuantity-${id}`}
        type="number"
        name={`quantity`}
        required
      />

      <label htmlFor={`addNewFoodCalories-${id}`}>
        {locale.addNewFoodCalories}
      </label>
      <input
        id={`addNewFoodCalories-${id}`}
        type="number"
        name={`calories`}
        required
      />

      <label htmlFor={`addNewFoodCarbohydrates-${id}`}>
        {locale.addNewFoodCarbohydrates}
      </label>
      <input
        id={`addNewFoodCarbohydrates-${id}`}
        type="number"
        name={`carbohydrates`}
        required
      />

      <label htmlFor={`addNewFoodFats-${id}`}>{locale.addNewFoodFats}</label>
      <input
        id={`addNewFoodFats-${id}`}
        type="number"
        name={`fats`}
        required
      />

      <label htmlFor={`addNewFoodProteins-${id}`}>
        {locale.addNewFoodProteins}
      </label>
      <input
        id={`addNewFoodProteins-${id}`}
        type="number"
        name={`proteins`}
        required
      />

      <label htmlFor={`addNewFoodCategory-${id}`}>
        {locale.addNewFoodCategory}
      </label>
      <input
        id={`addNewFoodCategory-${id}`}
        type="text"
        name={`category`}
      />

      <div>
        <button type="submit">{locale.submitButton}</button>
        <button type="reset">{locale.clearButton}</button>
      </div>
    </FormContainer>
  )
}

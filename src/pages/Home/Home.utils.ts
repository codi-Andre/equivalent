import { UserInput } from '@/contexts'
import { Food } from '@/entities/food'

export function formToUserInput(
  form: HTMLFormElement,
  baseFood: Food,
  substituint: Food,
) {
  const formData = new FormData(form)
  const userInputObj = Object.fromEntries(formData.entries())

  const userInput: UserInput = {
    baseFood: String(baseFood.id),
    quantity: Number(userInputObj.quantity),
    substituint: String(substituint.id),
  }

  return userInput
}

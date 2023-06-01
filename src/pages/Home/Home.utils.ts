import { UserInput } from '@/contexts'

export function formToUserInput(form: EventTarget & HTMLFormElement) {
  const formData = new FormData(form)
  const userInputObj = Object.fromEntries(formData.entries())

  const userInput: UserInput = {
    baseFood: String(userInputObj.baseFood),
    quantity: Number(userInputObj.quantity),
    substituint: String(userInputObj.quantity),
  }

  return userInput
}

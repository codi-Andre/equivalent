import { getFoodList, postFood } from '@/api'
import { Food } from '@/entities/food'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { UserInput } from './FoodContext.intefaces'
import { AxiosResponse } from 'axios'

interface ContextData {
  foodList: Food[]
  updateList: () => void
  calculateEquivalent: (userInput: UserInput) => number
  addFood: (food: Food) => Promise<AxiosResponse | undefined>
}

interface FoodContextProps {
  children: ReactNode
}

export const FoodContext = createContext({} as ContextData)

export default function FoodProvider({ children }: FoodContextProps) {
  const [foodList, setFoodList] = useState<Food[]>([])

  useEffect(() => {
    updateList()
  }, [])

  async function updateList() {
    const list = await getFoodList()

    if (Array.isArray(list)) {
      setFoodList([...list])
    } else {
      setFoodList([])
    }
  }

  async function addFood(food: Food): Promise<AxiosResponse | undefined> {
    const response = await postFood(food)

    if (response !== undefined && response.status < 300) {
      setFoodList(foodList =>
        [...foodList, response.data].sort((a, b) => {
          if (a.name < b.name) return -1

          if (a.name > b.name) return 1

          return 0
        }),
      )
    }

    return response
  }

  function calculateEquivalent(userInput: UserInput) {
    // encontra o valor calórico de uma grama
    const baseFoodCaloriesPerGram = Number(
      (userInput.baseFood.calories / userInput.baseFood.quantity).toFixed(1),
    )
    const substituintCaloriesPerGram = Number(
      (userInput.substituint.calories / userInput.substituint.quantity).toFixed(
        1,
      ),
    )

    // multiplica o alimento base pela quantidade escolhida pelo usuário
    const totalCalories = baseFoodCaloriesPerGram * userInput.quantity
    // divide o valor total de calorias pelo alimento substituinte
    const result = Number(
      (totalCalories / substituintCaloriesPerGram).toFixed(1),
    )

    return result
  }

  return (
    <FoodContext.Provider
      value={{
        foodList,
        updateList,
        calculateEquivalent,
        addFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  )
}

export function useFood() {
  return useContext(FoodContext)
}

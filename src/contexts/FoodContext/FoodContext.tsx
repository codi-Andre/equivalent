import { createFood, deleteFood, getFoodList } from '@/api'
import { Food } from '@/entities/food'
import { AxiosResponse } from 'axios'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { UserInput } from './FoodContext.intefaces'
import { sortList } from './FoodContext.utils'

interface ContextData {
  foodList: Food[]
  updateList: () => void
  calculateEquivalent: (userInput: UserInput) => number
  addFood: (food: Food) => Promise<AxiosResponse | undefined>
  removeFood: (foodId: string) => Promise<AxiosResponse | undefined>
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
    const response = await createFood(food)

    if (response !== undefined && response.status < 300) {
      setFoodList(foodList => sortList(foodList, response.data))
    }

    return response
  }

  async function removeFood(
    foodId: string,
  ): Promise<AxiosResponse | undefined> {
    const response = await deleteFood(foodId)

    if (response !== undefined && response.status < 300) {
      setFoodList(foodList => foodList.filter(food => food.id !== foodId))
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
        removeFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  )
}

export function useFood() {
  return useContext(FoodContext)
}

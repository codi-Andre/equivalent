import { getFoodList } from '@/api'
import { Food } from '@/entities/food'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { UserInput } from './FoodContext.intefaces'

interface ContextData {
  foodList: Food[]
  updateList: () => void
  calculateEquivalent: (userInput: UserInput) => number
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
      }}
    >
      {children}
    </FoodContext.Provider>
  )
}

export function useFood() {
  return useContext(FoodContext)
}

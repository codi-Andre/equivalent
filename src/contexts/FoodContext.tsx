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
  calculateEquivalent: (userInput: UserInput) => object
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
    console.log('dentro do context', userInput)
    return userInput
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

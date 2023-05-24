import { getFoodList } from '@/api'
import { Food } from '@/entities/food'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ContextData {
  foodList: Food[]
  updateList: () => void
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

  return (
    <FoodContext.Provider
      value={{
        foodList,
        updateList,
      }}
    >
      {children}
    </FoodContext.Provider>
  )
}

export function useFood() {
  return useContext(FoodContext)
}

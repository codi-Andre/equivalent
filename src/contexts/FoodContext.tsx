import axios from 'axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface Food {
  id: number
  name: string
  quantity: number
  calories: number
  carbohydrates: number
  proteins: number
  fats: number
  category?: string
}

interface ContextData {
  foodList: Food[]
  updateList: () => void
}

interface FoodContextProps {
  children: ReactNode
}

export const FoodStorage = createContext({} as ContextData)

export function FoodContext({ children }: FoodContextProps) {
  const [foodList, setFoodList] = useState<Food[]>([])

  useEffect(() => {
    updateList()
  }, [])

  async function updateList() {
    try {
      const response = await axios.get('http://localhost:3000/food')
      const list = response.data

      setFoodList([...list])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FoodStorage.Provider
      value={{
        foodList,
        updateList,
      }}
    >
      {children}
    </FoodStorage.Provider>
  )
}

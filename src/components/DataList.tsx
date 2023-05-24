import { FoodStorage } from '@/contexts/FoodContext'
import { useContext } from 'react'

export function FoodDataList() {
  const { foodList } = useContext(FoodStorage)

  return (
    <datalist id="food">
      {foodList.map(food => {
        return (
          <option
            key={food.name + food.id}
            value={food.name}
          />
        )
      })}
    </datalist>
  )
}

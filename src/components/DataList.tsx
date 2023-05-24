import { useFood } from '@/contexts'

export function FoodDataList() {
  const { foodList } = useFood()

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

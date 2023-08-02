import { Food } from '@/entities/food'

export function sortList(list: Food[], newItem: Food) {
  const sortedList = [...list, newItem].sort((firstItem, secondItem) => {
    if (firstItem.name < secondItem.name) return -1
    if (firstItem.name > secondItem.name) return 1
    return 0
  })
  return sortedList
}

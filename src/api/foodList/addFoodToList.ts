import { Food } from '@/entities/food'
import api from '../api'

async function addFoodToList(item: Food): Promise<number | undefined> {
  try {
    const response = await api.post('food', item)
    return response.status
  } catch (error) {
    console.log(error)
  }
}

export default addFoodToList

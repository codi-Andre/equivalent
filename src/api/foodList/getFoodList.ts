import { Food } from '@/entities/food'
import api from '../api'

async function updateList(): Promise<Food[] | undefined> {
  try {
    const response = await api.get('food')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default updateList

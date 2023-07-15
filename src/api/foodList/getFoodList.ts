import { Food } from '@/entities/food'
import api from '../api'

async function updateList(): Promise<Food[] | undefined> {
  try {
    const response = await api.get('food?_sort=name&_order=asc')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default updateList

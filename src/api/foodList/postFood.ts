import { Food } from '@/entities/food'
import api from '../api'
import { AxiosResponse } from 'axios'

async function postFood(item: Food): Promise<AxiosResponse | undefined> {
  try {
    const response = await api.post('food', item)
    return response
  } catch (error) {
    console.log(error)
  }
}

export default postFood

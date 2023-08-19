import api from '../api'
import { AxiosResponse } from 'axios'

async function deleteFood(foodId: string): Promise<AxiosResponse | undefined> {
  try {
    const response = await api.delete(`food/${foodId}`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export default deleteFood

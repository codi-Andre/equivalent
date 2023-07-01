import { Food } from '@/entities/food'

export interface UserInput {
  baseFood: Food
  quantity: number
  substituint: Food
}

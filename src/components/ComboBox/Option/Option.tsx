import { Food } from '@/entities/food'
import { useComboBox } from '../ComboBox'
import * as S from './Option.styles'

interface OptionProps {
  food: Food
  active: boolean
  selected: boolean
  setSelected: (e: Food) => void
}

export function Option({ food, active, selected, setSelected }: OptionProps) {
  const { setHovered, getRefMap } = useComboBox()
  return (
    <S.Option
      tabIndex={-1}
      role="option"
      className={`option-${active ? 'active' : ''} ${
        selected ? 'option-selected' : ''
      }`}
      id={String(food.id)}
      aria-selected={active}
      ref={node => getRefMap(node, food)}
      onMouseEnter={() => setHovered(String(food.id))}
      onMouseLeave={() => setHovered(undefined)}
      onClick={() => setSelected(food)}
    >
      {food.name}
    </S.Option>
  )
}

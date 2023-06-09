import { Food } from '@/entities/food'
import * as S from './Dropdown.styles'
import { useState } from 'react'

interface DropdownProps {
  placeholder?: string
  list: Food[]
  value?: Food
  onChangeValue: (value: Food) => void
}

function Dropdown({
  placeholder = 'Select...',
  list,
  value,
  onChangeValue,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleDropdown() {
    setIsOpen(!isOpen)
  }

  function onSelectItem(item: Food) {
    onChangeValue(item)
    toggleDropdown()
  }

  if (list === undefined || list.length === 0) {
    return (
      <S.Container>
        <S.Title>Sem opções</S.Title>
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.Content>
        <S.Title>{value?.name || placeholder}</S.Title>
        <S.Icon onClick={toggleDropdown} />
      </S.Content>

      {isOpen && (
        <S.ContentListWrapper>
          <S.ContentList>
            {list.map(item => (
              <S.Item
                key={item.id}
                isSelected={value?.id === item.id}
                onClick={() => onSelectItem(item)}
              >
                {item.name}
              </S.Item>
            ))}
          </S.ContentList>
        </S.ContentListWrapper>
      )}
    </S.Container>
  )
}

export default Dropdown

import { Food } from '@/entities/food'
import * as S from './Dropdown.styles'
import { useState } from 'react'

interface DropdownProps {
  placeholder?: string
  list: Food[]
}

function Dropdown({ placeholder = 'Select...', list }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(-1)

  function toggleDropdown() {
    setIsOpen(!isOpen)
  }

  function onSelectItem(item: Food) {
    setSelectedItem(item.id)
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
        <S.Title>{placeholder}</S.Title>
        <S.Icon onClick={toggleDropdown} />
      </S.Content>

      {isOpen && (
        <S.ContentListWrapper>
          <S.ContentList>
            {list.map(item => (
              <S.Item
                key={item.id}
                isSelected={selectedItem === item.id}
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

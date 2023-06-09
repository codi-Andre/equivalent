import * as S from './Dropdown.styles'
import { useState } from 'react'

interface DropdownProps<T> {
  placeholder?: string
  list: T[]
  value?: T
  onChangeValue?: (value: T) => void
  showProp?: keyof T
}

function Dropdown<T extends { id: number | string; name?: string }>({
  placeholder = 'Select...',
  list,
  value,
  onChangeValue,
  showProp = 'name',
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleDropdown() {
    setIsOpen(!isOpen)
  }

  function onSelectItem(item: T) {
    onChangeValue?.(item)
    toggleDropdown()
  }

  if (list === undefined || list.length === 0) {
    return (
      <S.Container>
        <S.Title>Sem opções</S.Title>
      </S.Container>
    )
  }

  if (typeof list[0]?.[showProp] !== 'string') {
    throw new Error('showProp must have string value')
  }

  return (
    <S.Container>
      <S.Content>
        <S.Title>{(value?.[showProp] as string) || placeholder}</S.Title>
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
                {item[showProp] as string}
              </S.Item>
            ))}
          </S.ContentList>
        </S.ContentListWrapper>
      )}
    </S.Container>
  )
}

export default Dropdown

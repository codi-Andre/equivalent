import * as S from './Selector.styles'

interface SelectorProps {
  listId?: string
  title?: string
  type?: string
  min?: number
  placeholder?: string
}

function Selector({
  listId,
  title,
  type,
  min = 1,
  placeholder,
}: SelectorProps) {
  return (
    <S.Container>
      <S.Title htmlFor={title}>{title}</S.Title>
      <S.Selector
        id={title}
        list={listId}
        type={type}
        min={min}
        placeholder={placeholder}
      />
    </S.Container>
  )
}

export default Selector

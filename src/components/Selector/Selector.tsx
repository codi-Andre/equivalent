import * as S from './Selector.styles'

interface SelectorProps {
  listId?: string
  title?: string
  type?: string
  min?: number
}

function Selector({ listId, title, type, min = 1 }: SelectorProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Selector
        list={listId}
        type={type}
        min={min}
      />
    </S.Container>
  )
}

export default Selector

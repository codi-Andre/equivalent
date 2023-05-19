import * as S from './Selector.styles'

interface SelectorProps {
  listId: string
  title?: string
}

function Selector({ listId, title }: SelectorProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Selector list={listId} />
    </S.Container>
  )
}

export default Selector

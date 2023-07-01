import * as S from './Selector.styles'

interface SelectorProps {
  title?: string
  type?: string
  min?: number
  placeholder?: string
  value: string
  setValue: (num: string) => void
}

function Selector({
  title,
  type,
  min = 1,
  placeholder,
  value,
  setValue,
}: SelectorProps) {
  return (
    <S.Container>
      <S.Title htmlFor={title}>{title}</S.Title>
      <S.Selector
        id={title}
        type={type}
        min={min}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </S.Container>
  )
}

export default Selector

import * as S from './Button.styles'

interface ButtonProps {
  isNegative?: boolean
  onClick?: () => void
  children?: string
}

function Button({ isNegative, onClick, children = 'button' }: ButtonProps) {
  return (
    <S.Button
      isNegative={isNegative}
      onClick={onClick}
    >
      {children}
    </S.Button>
  )
}

export default Button

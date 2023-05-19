import { ReactNode } from 'react'
import * as S from './Button.styles'

interface ButtonProps {
  isNegative?: boolean
  onClick?: () => void
  children: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
}

function Button({
  isNegative,
  onClick,
  children = 'button',
  type,
}: ButtonProps) {
  return (
    <S.Button
      isNegative={isNegative}
      onClick={onClick}
      type={type}
    >
      {children}
    </S.Button>
  )
}

export default Button

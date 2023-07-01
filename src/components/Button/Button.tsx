import { ReactNode } from 'react'
import * as S from './Button.styles'

interface ButtonProps {
  isNegative?: boolean
  disabled?: boolean
  onClick?: () => void
  children: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
}

function Button({
  isNegative,
  onClick,
  children = 'button',
  type = 'button',
  disabled,
}: ButtonProps) {
  return (
    <S.Button
      disabled={disabled}
      isNegative={isNegative}
      onClick={onClick}
      type={type}
    >
      {children}
    </S.Button>
  )
}

export default Button

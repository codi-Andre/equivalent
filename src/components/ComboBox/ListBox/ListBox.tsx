import { ReactNode } from 'react'
import * as S from './ListBox.styles'
import locale from '@/assets/locale.json'

interface ListBoxProps {
  id: String
  children: ReactNode
}

export function ListBox({ id, children }: ListBoxProps) {
  return (
    <S.ListBox
      tabIndex={-1}
      role="listbox"
      aria-label={locale.listTitle}
      id={`list-box--${id}`}
    >
      {children}
    </S.ListBox>
  )
}

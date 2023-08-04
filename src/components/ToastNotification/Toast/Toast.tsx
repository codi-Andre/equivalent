import { Icon } from '@components'
import * as S from './Toast.styles'
import { ToastData } from '@/contexts'
import { ReactNode } from 'react'

interface ToastProps extends ToastData {
  icon: ReactNode
  onClose: (id: string) => void
}

export function Toast({ id, message, icon, type, onClose }: ToastProps) {
  return (
    <S.ToastContainer
      type={type}
      role="alert"
    >
      <S.Message>
        {icon}
        <p>{message}</p>
      </S.Message>
      <S.ToastCloseBtn
        title="close"
        onClick={() => onClose(id)}
      >
        <Icon name="close" />
      </S.ToastCloseBtn>
      <S.ProgressBar type={type}>
        <div></div>
      </S.ProgressBar>
    </S.ToastContainer>
  )
}

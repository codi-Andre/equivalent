import { Icon } from '@components'
import * as S from './Toast.styles'

interface ToastProps {
  id: string
  type: number
  message: string
  onClose: (id: string) => void
}

export function Toast({ id, message, type, onClose }: ToastProps) {
  return (
    <S.ToastContainer role="alert">
      <S.Message>
        <Icon name={type < 300 ? 'check_circle' : 'cancel'} />
        <p>{message}</p>
      </S.Message>
      <S.ToastCloseBtn
        title="close"
        onClick={() => onClose(id)}
      >
        <Icon name="close" />
      </S.ToastCloseBtn>
    </S.ToastContainer>
  )
}

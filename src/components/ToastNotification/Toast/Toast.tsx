import { Icon } from '@components'
import * as S from './Toast.styles'

interface ToastProps {
  type: number
  message: string
  onClose: () => void
}

export function Toast({ message, type, onClose }: ToastProps) {
  return (
    <S.ToastContainer role="alert">
      <S.Message>
        <Icon name={type < 300 ? 'check_circle' : 'cancel'} />
        <p>{message}</p>
      </S.Message>
      <S.ToastCloseBtn
        title="close"
        onClick={() => onClose()}
      >
        <Icon name="close" />
      </S.ToastCloseBtn>
    </S.ToastContainer>
  )
}

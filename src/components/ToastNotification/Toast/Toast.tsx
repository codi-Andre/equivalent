import { Icon } from '@components'
import * as S from './Toast.styles'
import { ToastData } from '@/contexts'

interface ToastProps extends ToastData {
  onClose: (id: string) => void
}

export function Toast({ id, message, type, onClose }: ToastProps) {
  const iconMap = {
    success: <Icon name="check_circle" />,
    failure: <Icon name="cancel" />,
    warning: <Icon name="info" />,
    info: <Icon name="help" />,
  }

  return (
    <S.ToastContainer
      type={type}
      role="alert"
    >
      <S.Message>
        {iconMap[type] ?? null}
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

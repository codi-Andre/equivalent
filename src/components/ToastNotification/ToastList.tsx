import * as S from './ToastList.styles'
import { Toast } from './Toast/Toast'
import { useEffect, useRef } from 'react'
import { useToast } from '@/contexts'
import { Icon } from '@components'

export function ToastList() {
  const listRef = useRef<HTMLDivElement | null>(null)

  const { toasts, removeToast } = useToast()

  const iconMap = {
    SUCCESS: <Icon name="check_circle" />,
    FAILURE: <Icon name="cancel" />,
    WARNING: <Icon name="info" />,
    INFO: <Icon name="help" />,
  }

  useEffect(() => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight)
  }, [toasts])

  return (
    <S.ToastListContainer
      aria-live="assertive"
      ref={listRef}
    >
      {toasts.length > 0 &&
        toasts.map(toast => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            icon={iconMap[toast.type] ?? null}
            message={toast.message}
            onClose={removeToast}
          />
        ))}
    </S.ToastListContainer>
  )
}

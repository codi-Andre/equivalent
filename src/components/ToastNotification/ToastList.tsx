import * as S from './ToastList.styles'
import { Toast } from './Toast/Toast'
import { useEffect, useRef } from 'react'
import { useToast } from '@/contexts'

export function ToastList() {
  const listRef = useRef<HTMLDivElement | null>(null)

  const { toasts, removeToast } = useToast()

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
            message={toast.message}
            onClose={removeToast}
          />
        ))}
    </S.ToastListContainer>
  )
}

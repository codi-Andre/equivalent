import * as S from './ToastList.styles'
import { Toast } from './Toast/Toast'

interface ToastListProps<T> {
  data: T[]
  removeToast: () => void
}

export function ToastList<
  T extends { id: string; type: number; message: string },
>({ data, removeToast }: ToastListProps<T>) {
  return (
    data.length > 0 && (
      <S.ToastListContainer aria-live="assertive">
        {data.map(toast => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={removeToast}
          />
        ))}
      </S.ToastListContainer>
    )
  )
}

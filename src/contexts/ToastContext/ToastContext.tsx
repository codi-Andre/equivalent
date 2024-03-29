import { ReactNode, createContext, useContext, useState } from 'react'
import { ToastData, ToastStatus } from './ToastContext.interface'

interface ToastContextData {
  toasts: ToastData[]
  removeToast: (id: string) => void
  newToast: (type: ToastStatus, message: string) => void
}

interface ToastProviderProps {
  children: ReactNode
}

export const ToastContext = createContext({} as ToastContextData)

export default function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([])

  function removeToast(id: string) {
    setToasts(toasts => toasts.filter(toast => toast.id !== id))
  }

  function newToast(type: ToastStatus, message: string) {
    const toast = {
      id: new Date().toUTCString(),
      type,
      message,
    }

    setToasts(toasts => [...toasts, toast])

    setTimeout(() => {
      removeToast(toast.id)
    }, 1000 * 10)
  }
  return (
    <ToastContext.Provider value={{ toasts, newToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}

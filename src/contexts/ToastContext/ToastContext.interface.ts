export type ToastStatus = 'success' | 'failure' | 'warning' | 'info'

export interface ToastData {
  id: string
  type: ToastStatus
  message: string
}

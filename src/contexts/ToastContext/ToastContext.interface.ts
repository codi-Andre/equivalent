export enum ToastStatus {
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Warning = 'WARNING',
  Info = 'INFO',
}

export interface ToastData {
  id: string
  type: ToastStatus
  message: string
}

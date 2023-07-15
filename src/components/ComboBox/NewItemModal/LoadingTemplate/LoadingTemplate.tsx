import { Icon } from '@/components/Icon'

interface LoadingTemplateProps {
  status: 'start' | 'loading' | 'ready'
  success: number | undefined
  onClick: () => void
}

export function LoadingTemplate({
  status,
  success,
  onClick,
}: LoadingTemplateProps) {
  if (status === 'loading') {
    return (
      <div>
        <Icon
          name="cloud_upload"
          size={48}
        />
        <p>Salvando...</p>
      </div>
    )
  } else {
    return (
      <div>
        <Icon
          name={
            success === undefined || success > 299 ? 'cancel' : 'check_circle'
          }
          size={48}
        />
        <p>
          {success === undefined || success > 299
            ? 'request failed'
            : 'request successful'}
        </p>
        <button onClick={() => onClick()}>ok</button>
      </div>
    )
  }
}

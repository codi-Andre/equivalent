import { Outlet } from 'react-router-dom'
import * as S from './DefaultLayout.styles'
import { Navigator, ToastList, Slider } from '@/components'

export function DefaultLayout() {
  return (
    <S.LayoutContainer>
      <Navigator />
      <ToastList />
      <Outlet />
      <Slider />
    </S.LayoutContainer>
  )
}

import { ReactNode } from 'react'
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components'
import { theme } from './theme'

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <StyledComponentThemeProvider theme={theme}>
    {children}
  </StyledComponentThemeProvider>
)

export default ThemeProvider

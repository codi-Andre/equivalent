import ThemeProvider from '@styles/ThemeProvider'
import { GlobalStyle } from '@styles/global'
import { Home } from './pages'

function App() {
  return (
    <ThemeProvider>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

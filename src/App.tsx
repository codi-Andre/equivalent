import { Home } from './pages'
import ThemeProvider from 'styles/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App

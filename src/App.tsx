import ThemeProvider from '@styles/ThemeProvider'
import { GlobalStyle } from '@styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

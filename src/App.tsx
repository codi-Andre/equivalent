import ThemeProvider from '@styles/ThemeProvider'
import { GlobalStyle } from '@styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { FoodProvider } from './contexts'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <FoodProvider>
          <Router />
        </FoodProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

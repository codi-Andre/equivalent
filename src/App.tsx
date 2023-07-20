import ThemeProvider from '@styles/ThemeProvider'
import { GlobalStyle } from '@styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { FoodProvider, ToastProvider } from './contexts'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <FoodProvider>
          <ToastProvider>
            <Router />
          </ToastProvider>
        </FoodProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

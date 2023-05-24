import ThemeProvider from '@styles/ThemeProvider'
import { GlobalStyle } from '@styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { FoodContext } from './contexts/FoodContext'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <FoodContext>
          <Router />
        </FoodContext>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

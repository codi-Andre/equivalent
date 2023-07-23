import { Routes, Route } from 'react-router-dom'
import { AboutUs, FoodList, Home } from '@pages'
import { DefaultLayout } from './layouts'

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout />}
      >
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/food-list"
          element={<FoodList />}
        />
        <Route
          path="/about-us"
          element={<AboutUs />}
        />
      </Route>
    </Routes>
  )
}

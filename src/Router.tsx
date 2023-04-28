import { Routes, Route } from 'react-router-dom'
import { AboutUs, FoodList, Home } from '@pages'

export function Router() {
  return (
    <Routes>
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
    </Routes>
  )
}

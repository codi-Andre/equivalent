import { NavLink } from 'react-router-dom'
import { Icon } from '../Icon'
import { Header } from './Navigator.styles'

export function Navigator() {
  return (
    <Header>
      <nav>
        <NavLink to="/">
          <Icon
            name="home"
            title="home"
          />
        </NavLink>
        <NavLink to="/food-list">
          <Icon
            name="restaurant"
            title="food list"
          />
        </NavLink>
        <NavLink to="/about-us">
          <Icon
            name="diversity_3"
            title="about us"
          />
        </NavLink>
      </nav>
    </Header>
  )
}

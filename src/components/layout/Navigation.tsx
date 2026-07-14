import { NavLink } from 'react-router-dom'
import { navItems } from '../../data/demoData'

export function DesktopNavigation() {
  return (
    <nav className="desktop-navigation" aria-label="主导航">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} end={item.to === '/'}>
          <span>{item.en}</span>
          <small>{item.zh}</small>
        </NavLink>
      ))}
    </nav>
  )
}

export function MobileNavigation() {
  return (
    <nav className="mobile-navigation" aria-label="手机主导航">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} end={item.to === '/'}>
          <span aria-hidden="true">{item.icon}</span>
          <small>{item.short}</small>
        </NavLink>
      ))}
    </nav>
  )
}

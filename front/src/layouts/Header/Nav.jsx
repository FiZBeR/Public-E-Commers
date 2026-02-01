import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
        {/*<!-- Desktop Nav -->*/}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            className="text-sm font-medium text-text-main hover:text-primary transition-colors "
            to="/allProducts"
          >
            All Products
          </NavLink>
          {/*<!-- Leaf Separator -->*/}
          <span className="text-primary/60 0">
            <svg
              fill="currentColor"
              height="12"
              viewBox="0 0 24 24"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l.66-.51c.48-.37 3.63-2.81 7.23-5.22C17.75 13.5 21.5 8.5 21.5 8.5L22 8l-.5-.5C21.5 7.5 17 8 17 8zM3.5 4.5l.5.5c.5.5 4.5 5 9.5 5C9.69 7.84 6.54 3.73 6.06 3.36L5.4 2.85 3.5 4.5z"></path>
            </svg>
          </span>
          <NavLink
            className="text-sm font-medium text-text-main hover:text-primary transition-colors "
            to="/allProducts/vestidos"
          >
            Vestidos
          </NavLink>
          {/*<!-- Leaf Separator -->*/}
          <span className="text-primary/60 ">
            <svg
              fill="currentColor"
              height="12"
              viewBox="0 0 24 24"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l.66-.51c.48-.37 3.63-2.81 7.23-5.22C17.75 13.5 21.5 8.5 21.5 8.5L22 8l-.5-.5C21.5 7.5 17 8 17 8zM3.5 4.5l.5.5c.5.5 4.5 5 9.5 5C9.69 7.84 6.54 3.73 6.06 3.36L5.4 2.85 3.5 4.5z"></path>
            </svg>
          </span>
          <NavLink
            className="text-sm font-medium text-text-main hover:text-primary transition-colors "
            to="/allProducts/blusas"
          >
            Blusas
          </NavLink>
          {/*<!-- Leaf Separator -->*/}
          <span className="text-primary/60 ">
            <svg
              fill="currentColor"
              height="12"
              viewBox="0 0 24 24"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l.66-.51c.48-.37 3.63-2.81 7.23-5.22C17.75 13.5 21.5 8.5 21.5 8.5L22 8l-.5-.5C21.5 7.5 17 8 17 8zM3.5 4.5l.5.5c.5.5 4.5 5 9.5 5C9.69 7.84 6.54 3.73 6.06 3.36L5.4 2.85 3.5 4.5z"></path>
            </svg>
          </span>
          <NavLink
            className="text-sm font-medium text-text-main hover:text-primary transition-colors "
            to="/about"
          >
            Nosotros
          </NavLink>
        </nav>
    </>
  )
}

export default Nav

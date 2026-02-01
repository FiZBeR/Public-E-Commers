import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <>
        {/*<!-- Logo -->*/}
        <NavLink className="flex items-center gap-2" 
            to={'/'}>
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontSize: "32px" }}
          >
            yard
          </span>
        
          <h1 className="text-xl font-bold tracking-tight text-text-main ">
            Wildflower Garden
          </h1>
        </NavLink>
    </>
  )
}

export default Logo

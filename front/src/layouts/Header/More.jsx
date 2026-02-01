import React from 'react'
import Icons from "../../assets/icons/Icons";
import { NavLink } from 'react-router-dom';

const More = () => {
  return (
    <>
        {/*<!-- Icons -->*/}
        <div className="flex items-center gap-4">
          <NavLink className="flex items-center justify-center rounded-full p-2 text-text-main hover:bg-primary/20 " 
            to={'/'}
          >
            <Icons name={'search'}/>
          </NavLink>
          <NavLink className="flex items-center justify-center rounded-full p-2 text-text-main hover:bg-primary/20 " 
            to={'/shopping_cart'}
          >
            <Icons name={'shopping_bag'} />
          </NavLink>
          <NavLink className="flex items-center justify-center rounded-full p-2 text-text-main hover:bg-primary/20 "
            to={'/login'}
          >
            <Icons name={'account_circle'}/>
          </NavLink>
        </div>
    </>
  )
}

export default More

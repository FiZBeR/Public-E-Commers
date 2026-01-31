import React from 'react'
import Icons from "../../assets/icons/Icons";

const More = () => {
  return (
    <>
        {/*<!-- Icons -->*/}
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center rounded-full p-2 text-text-main hover:bg-primary/20 ">
            <Icons name={'search'}/>
          </button>
          <button className="flex items-center justify-center rounded-full p-2 text-text-main hover:bg-primary/20 ">
            <Icons name={'shopping_bag'} />
          </button>
          <button className="flex items-center justify-center rounded-full p-2 text-text-main hover:bg-primary/20 ">
            <Icons name={'account_circle'}/>
          </button>
        </div>
    </>
  )
}

export default More

import React from 'react'

const Logo = () => {
  return (
    <>
        {/*<!-- Logo -->*/}
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontSize: "32px" }}
          >
            yard
          </span>
        
          <h1 className="text-xl font-bold tracking-tight text-text-main ">
            Wildflower Garden
          </h1>
        </div>
    </>
  )
}

export default Logo

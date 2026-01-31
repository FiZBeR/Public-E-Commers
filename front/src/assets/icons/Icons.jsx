import React from 'react'

const Icons = ({
    name,
    size = 24,
    weight = 400,
    fill = 0,
    color = "inherit",
    className = "",
  }) => {

    const style = {
        fontSize: size,
        color: color,
        fontVariationSettings: `
          'FILL' ${fill},
          'wght' ${weight},
          'GRAD' 0,
          'opsz' ${size}
        `,
      };

  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={style}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}

export default Icons

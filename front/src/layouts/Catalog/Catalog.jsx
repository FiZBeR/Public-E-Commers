import React from 'react'
import { useParams } from 'react-router-dom'

const Catalog = () => {
  const params = useParams();

  return (
    <div>
      Aca ira la lista con los productos {params.categoria}
    </div>
  )
}

export default Catalog


/* import customFetch from '../utils/customFetch' */
import { traerProducto } from '../utils/productos'
import ItemDetail from './ItemDetail'

import React, { useState, useEffect } from 'react'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    traerProducto()
      .then((res) => {
        setProduct(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer

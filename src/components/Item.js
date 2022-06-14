import React from 'react'
import ItemCount from './ItemCount'

const Item = ({ products }) => {
  return (
    <div>
      <img width="200px" src={products.image} alt="producto" />
      <h2>{products.name}</h2>
      <p>${products.precio}</p>
      <h4>Stock: {products.stock}</h4>
      <ItemCount stock={products.stock} initial={1} />
    </div>
  )
}

export default Item

/* function Item({id, name, image, stock}) {
  return (
    <div >
        <h1>{name}</h1>
        <img src={image} alt={id} />
        <ItemCount stock={stock} />
    </div>
  )
}

export default Item
 */

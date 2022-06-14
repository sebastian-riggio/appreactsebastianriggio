import React from 'react'



const Item = ({ products }) => {
  return (
    <div>
      <img width="200px" src={products.img} alt="producto" />
      <h2>{products.name}</h2>
      <p>${products.price}</p>
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

import React from 'react'
import ItemCount from './ItemCount'


const Item = ({ item }) => {
  return (
    <div>
      <img width="200px" src={item.img} alt="producto" />
      <h2>{item.name}</h2>
      <p>${item.price}</p>
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

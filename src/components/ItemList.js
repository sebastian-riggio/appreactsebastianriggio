import React from 'react'
import Item from './Item'



const ItemList = ({ items }) => {
  return (
      <>
          <div
              
          >
              {items.map((item) => (
                  <Item key={item.id} item={item} />
              ))}
          </div>
      </>
  );
};

export default ItemList;


/* function ItemList({ products }) {
  return products.map((p) => (
    <Item id={p.id} 
    name={p.name} 
    image={p.image} 
    key={p.id}
    stock={p.stock} />
  ))
}

export default ItemList */

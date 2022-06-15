import Item from './Item'

const ItemList = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((products) => (
        <Item key={products.id} products={products} />
      ))}
    </div>
  )
}

export default ItemList
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

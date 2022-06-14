import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
  return (
    <div className="detail">
      <img src={product.img} alt={product.name} width="400" />
      <div>
        <h1>{product.name}</h1>
        <h2>{product.description}</h2>
        <h3>$ {product.price}</h3>

        <ItemCount stock={product.stock} initial={1} />
      </div>
    </div>
  )
}

export default ItemDetail

/* function ItemDetail({ id, name, image, stock, descripcion }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={id} />
      <h2>{descripcion}</h2>
      <h4>Stock: {product.stock}</h4>
      <ItemCount stock={product.stock} initial={1} />
    </div>
  )
}

export default ItemDetail */

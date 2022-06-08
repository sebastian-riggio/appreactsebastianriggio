import React from 'react'

import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial)

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1)
      console.log(contador)
    }
  }

  const disminuirContador = () => {
    if (contador > [0]) setContador(contador - 1)
    console.log(contador)
  }
  const confirmarContador = () => {}
  return (
    <div>
      <p> stock: {stock}</p>
      <p> tu pedidos es: {contador}</p>
      <button onClick={aumentarContador}>Sumar producto</button>
      <button onClick={disminuirContador}>Sacar producto</button>
      <button onClick={confirmarContador}> Hacer Pedido</button>
    </div>
  )
}

export default ItemCount

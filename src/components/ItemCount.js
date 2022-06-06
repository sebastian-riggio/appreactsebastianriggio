import React from 'react'
import { cloneElement } from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  console.log(stock);

  const aumentarContador = () => {

     setContador(contador + 1)
    
  }

  const disminuirContador = () => {
    

    setContador(contador - 1)
  }
  const confirmarContador = () => {}
  return (
    <div>
      <p> Tu Pedidos es : {contador}</p>
      <button onClick={aumentarContador}>Sumar producto</button>
      <button onClick={disminuirContador}>Sacar producto</button>
      <button onClick={confirmarContador}> Hacer Pedido</button>
    </div>
  )
}

export default ItemCount

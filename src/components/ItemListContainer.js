import './ItemlistContainer.css'
import ItemList from './ItemList'
import ItemCount from './ItemCount'
import productos from '../utils/productos'
/* import customFetch from '../utils/customFetch'; */
import {traerProductos } from '../utils/productos'
import React from 'react'
import { useState, useEffect } from 'react'

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  /* 
    useEffect(() => {
        customFetch(3000, productos)
        .then(r => setItems(r))
    }, [items]) */

  useEffect(() => {
    traerProductos()
      .then((res) => {
        setProducts(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <ItemList products={products} />

      <ItemCount stock={30} initial={0} onAdd={6} />
    </div>
  )
}

export default ItemListContainer

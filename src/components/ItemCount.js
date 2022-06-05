import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, initial, onadd}) => {
    const[contador, setContador] = useState(initial)

    const aumentarContador = ()=> {
        setContador (contador + 1)
    }

        const disminuirContador = ()=> {
            if (contador >[0])
            setContador (contador -1)
        }
        confirmarContador = ()=>{
           
    
        }
        return (
            <div>
                <p> Tu Pedidos es: {contador}</p>
                <button onClick={aumentarContador}>Sumar producto</button>
                <button onClick={disminuirContador}>Sacar producto</button>
                <button>Hacer Pedido</button>
                
            </div>
        )
    }

  
    


export default ItemCount

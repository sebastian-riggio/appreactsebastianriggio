import React from 'react';
import './ItemlistContainer.css';


const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className="saludo">{props.saludo}</h1>
            
        </div>
    )
}

export default ItemListContainer

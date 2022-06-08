
import './ItemlistContainer.css';
import ItemList from './ItemList';
import ItemCount from './ItemCount'
import React, {useEffect, useState} from react;
import productos from '../../utils/productos';
import customFetch from '../../utils/customFetch';






const ItemListContainer = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        customFetch(3000, productos)
        .then(r => setItems(r))
    }, [items])

    
    return (
        <div>
             <ItemList products= {items}/>
           
            <ItemCount stock={30} initial={0} onAdd={6} />
            
        </div>
    )
}

export default ItemListContainer

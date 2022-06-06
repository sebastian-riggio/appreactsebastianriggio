
import Header from "./components/header";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";



const App = () => {
    
        
    
       return (

<div>
<Header />
<ItemListContainer saludo="bienvenidos"/>
<ItemCount stock={10}   initial={0} onAdd={6} />


</div>
    )
}

export default App
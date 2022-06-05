import NavBar from "./components/NavBar";
import Header from "./components/header";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";



const App = () => {
    
        
    
       return (

<div>
<Header />
<ItemListContainer saludo="bienvenidos"/>
<ItemCount stock={6}   initial={1} onadd={onadd} />


</div>
    )
}

export default App
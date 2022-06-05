import NavBar from "./components/NavBar";
import Header from "./components/header";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";



const App = () => {
    const onAdd =()=>{}
       return (

<div>
<Header />
<ItemListContainer saludo="bienvenidos"/>
<ItemCount stock={6} onadd={onadd} initial={1}/>


</div>
    )
}

export default App
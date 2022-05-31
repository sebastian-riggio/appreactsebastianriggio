
import carrito from '../images/carrito.png';
import CartWidget from './Cartwidget';


const NavBar = () => {
    return (
      
 
         <nav >
             <ul className="navbar">
          
         <li ><a href="#">NOSOTROS</a></li>
         <li><a href="#">PRODUCTOS</a></li>
         <li><a href="#">CARRITO</a></li>
         <CartWidget imgSrc={carrito}/>
         </ul>
         
        

         </nav>
     


           
            
        
    )
}

export default NavBar
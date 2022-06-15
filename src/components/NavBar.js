

import CartWidget from './Cartwidget';


const NavBar = () => {
    return (
      
 
         <nav >
             <ul className="navbar">
          
         <li ><a href="#">NOSOTROS</a></li>
         <li><a href="#">PRODUCTOS</a></li>
         <li><a href="#">CARRITO</a></li>
         <CartWidget imgSrc="/images/carrito.png"/>
         </ul>
         
        

         </nav>
     


           
            
        
    )
}

export default NavBar

import logomerchi from '../images/logo_merchi3.png';


const NavBar = () => {
    return (
        <div>
            <header className="logo_inicio">
 <img src={logomerchi} className="medidas_logo" />
 </header>
 
         <nav >
             <ul className="navbar">
          
         <li ><a href="#">NOSOTROS</a></li>
         <li><a href="#">PRODUCTOS</a></li>
         <li><a href="#">CARRITO</a></li>
         </ul>
        

         </nav>
     


           
            
        </div>
    )
}

export default NavBar

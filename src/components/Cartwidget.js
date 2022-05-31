import './CartWidget.css';
import carrito from '../images/carrito.png';



function CartWidget ({imgSrc}){
return (
    <div> 

<a href="#"> <img src={carrito} className="carrito_logo" /></a>
       
    </div>
)
};

export default CartWidget
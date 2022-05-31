
import NavBar from './NavBar';
import logomerchi from '../images/logo_merchi3.png';


const Header = () => {
   
    return (
        <header className="logo_inicio">
            <img src={logomerchi} className="medidas_logo" />
          
            <NavBar />
        </header>
    )
}

export default Header

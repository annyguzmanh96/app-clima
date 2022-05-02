import { Link} from 'react-router-dom';
import logo from '../imgs/sol.webp';
import { FaListUl } from 'react-icons/fa';
import style from './NavBar.module.css';

export function NavBar () {

    return (
        <div className={style.containerAll}>
            
            <div className={style.boxHamburger}> 
                <Link to='/DropdownMenu'><FaListUl className={style.hamburgerMenu} size='2em' /></Link> {/*NavBar para DropdownMenu*/}
            </div>
            <Link to='/' > {/*Logo que lleva a Home*/}
                <div className={style.boxLogo}>
                    <img className={style.logo} src={logo} alt='Logo-Clima'/>
                    <h3 className={style.tlogo}>App Clima</h3>
                </div>
            </Link>
            <ul className={style.boxMenu}> {/*NavBar Menu Normal*/}
                <Link to='/'><li className={style.liMenu}>Home</li></Link> 
                <li className={style.liMenu}>Acesso Clientes</li>
                <li className={style.liMenu}>Servicios</li>
                <Link to='/contacto'> <li className={style.liMenu}>Contacto</li> </Link>
                <li className={style.liMenu}>Linea Etica</li>
                <li className={style.liMenu}>Sistema de Gestion</li>
                <li className={style.liMenu}>Politicas</li>
                <li className={style.liMenu}>Nuestros Aliados</li>
            </ul>   
            
        </div>
        
            
    )
}

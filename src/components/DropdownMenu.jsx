import { FaListUl } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from './DropdownMenu.module.css';
import { Footer } from './Footer';
import logo from '../imgs/sol.webp';
import { MainContent } from './MainContent';


export function DropdownMenu(){
    return(
        <div> 
            <div className={style.boxHamburger}> 
                <Link to= '/'><FaListUl className={style.hamburgerMenu} size='2em' /></Link> {/*NavBar para DropdownMenu*/}
            </div>
            <ul className={style.boxMenu}>
                <Link to='/'><li className={style.liMenu}>Home</li></Link>
                <li className={style.liMenu}>Acesso Clientes</li>
                <li className={style.liMenu}>Servicios</li>
                <Link to= '/contacto'><li className={style.liMenu}>Contacto</li></Link>
                <li className={style.liMenu}>Linea Etica</li>
                <li className={style.liMenu}>Sistema de Gestion</li>
                <li className={style.liMenu}>Politicas</li>
                <li className={style.liMenu}>Nuestros Aliados</li>
            </ul>  
            <Link to='/' > {/*Logo que lleva a Home*/}
                <div className={style.boxLogo}>
                    <img className={style.logo} src={logo} alt='Logo-Clima'/>
                    <h3 className={style.tlogo}>App Clima</h3>
                </div>
            </Link>
            <MainContent />
            <Footer />
        </div> 
    )

}
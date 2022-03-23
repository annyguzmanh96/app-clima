import logo from './sol.webp';
import style from './NavBar.module.css';

export function NavBar () {

    return (
        <div className={style.containerAll}>
            <div className={style.boxLogo}>
                <img className={style.logo} src={logo} alt='Logo-Clima'/>
                <h3 className={style.tlogo}>App Clima</h3>
            </div>
            
            <ul className={style.boxMenu}>
                <li className={style.liMenu}>Home</li>
                <li className={style.liMenu}>Acesso Clientes</li>
                <li className={style.liMenu}>Servicios</li>
                <li className={style.liMenu}>Contacto</li>
                <li className={style.liMenu}>Linea Etica</li>
                <li className={style.liMenu}>Sistema de Gestion</li>
                <li className={style.liMenu}>Politicas</li>
                <li className={style.liMenu}>Nuestros Aliados</li>
            </ul>   
        </div>
        
            
    )
}

import style from './DropdownMenu.module.css';

export function DropdownMenu(){
    return(
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
    )

}
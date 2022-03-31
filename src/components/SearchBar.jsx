import {FaSearch} from 'react-icons/fa';
import style from './SearchBar.module.css'


export function SearchBar() {
    let handleSubmit= (e)=> {
        e.preventDefault();//Ya que estamos trabajando una SPA (Single Page Aplication) y esto evita lo que por defecto hace un submit que es recargar la pàgina
    }

    return(
        <div className={style.containerAll}>
            <form onSubmit={handleSubmit}>
                <buttom type='submit' className={style.searchIcon}><FaSearch /></buttom>
                <input className={style.inputCiudades} placeholder="Buscar otras ciudades" type='text' autofocus='autofocus'/>
            </form>
        </div>
    )

}
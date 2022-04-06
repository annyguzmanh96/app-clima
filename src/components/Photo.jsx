//Componente: Foto del dia...Y luego hacer el footer...Y pasar ya a aplicar el consumo de la API
import {Link} from 'react-router-dom';
import {FiCamera} from 'react-icons/fi';
import style from './Photo.module.css';

export function Photo(){
    return(
        <div className={style.containerAll}>
            <Link to='/PhotoDelDia'>
                <FiCamera className={style.fiCamera} size='4em'/>
                <h5 className={style.title}>FOTO DEL DIA</h5>
            </Link>
        </div>
    )
}

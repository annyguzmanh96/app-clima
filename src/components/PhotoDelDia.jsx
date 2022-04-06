import {NavBar} from './NavBar';
import playa from './photo.jpg';
import style from './PhotoDelDia.module.css';

export function PhotoDelDia(){
    return(
        <div>
            <NavBar/>

        <div className={style.containerImage}>
            <img className={style.image} src={playa} alt='Playa'/>
        </div>
        </div>
    )
}
import style from './Card.module.css';
import { WiDaySnowWind } from 'react-icons/wi';

export function Card (){
    return(
        <div className={style.containerAll}>
            <h5 className={style.ciudad}> BOGOTA</h5>
            <h5 className={style.title}> Temperatura maxima </h5>
            <p className={style.dato}> 20ºc</p>
            <h5 className={style.title}> Humedad </h5> 
            <p className={style.dato}> 78 <WiDaySnowWind size='3em'/> </p>
            
        </div>
    )
}
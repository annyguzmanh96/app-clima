import style from './Card.module.css';

export function Card (){
    return(
        <div className={style.ContainerAll}>
            <h5 className={style.ciudad}> BOGOTA</h5>
            <h5 className={style.title}> Temperatura maxima </h5>
            <p className={style.dato}> 20ºc</p>
            <h5 className={style.title}> Humedad </h5>
            <p className={style.dato}> 78 </p>
            <h5 className={style.title}> Presion </h5>
            <p className={style.dato}> 120 </p>
        </div>
    )
}
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import style from './Footer.module.css'

export function Footer(){
    return(
        <div className={style.containerAll}>
            <div className={style.container2}>
                <div className={style.info}>
                    <p className={style.title}>PRONÓSTICO POR CIUDADES</p>
                </div>
                <div className={style.info}>
                    <p className={style.title}>ACCESO CLIENTES</p>
                    <p className={style.text}>INGRESO CLIENTES</p>
                    <p className={style.text}>INSCRÍBETE A CANAL</p>
                    <p className={style.text}>CLIMA PRO</p>
                </div>
                <div className={style.info}>
                    <p className={style.title}>SATÉLITES METEOROLÓGICOS</p>
                    <p className={style.text}>SATELITAL COLOMBIA</p>
                    <p className={style.text}>INFRARROJA COLOMBIA</p>
                    <p className={style.text}>INFRARROJA MÉXICO</p>
                </div>
                <div className={style.info}>
                    <p className={style.title}>SERVICIOS </p>
                    <p className={style.text}>SOLUCIONES POR SECTOR</p>
                    <p className={style.text}>SOLUCIONES PARA EMPRESAS</p>
                    <p className={style.text}>INFORMES Y CONTENIDO</p>
                    <p className={style.text}>EXPERIENCIA</p>
                    <p className={style.text}>SOLUCIONES CANAL</p>
                    <p className={style.text}>CLIMA PARA EMPRESAS</p>
                </div>
                <div className={style.info}>
                    <p className={style.title}>CONTACTO</p>
                    <p className={style.text}>FORMULARIO DE CONTACTO</p>
                </div>
            </div>
            <div className={style.socialMedia}>
                <h4>< AiFillInstagram className={style.icon} size='2em'/> &nbsp;AppClima</h4>
                <h4>< AiFillTwitterCircle className={style.icon} size='2em'/> &nbsp;AppClima</h4>
                <h4><BsFacebook className={style.icon} size='2em'/> &nbsp;AppClima</h4>
                <h4><BsYoutube className={style.icon} size='2em'/>&nbsp;AppClima</h4>
            </div>
            <div>
                <p className={style.theEnd}>©2022 App Clima by Ana G- Todos los derechos reservados. Términos , condiciones y Políticas de privacidad</p>
            </div>
        </div>
    )
}
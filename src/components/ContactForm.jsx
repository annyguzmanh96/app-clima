import { DropdownMenu } from './DropdownMenu';
import style from './ContactForm.module.css';
import { BiMailSend } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp  } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';


export function ContactForm(){
    return(
        
        <div className={style.containerAll}>
            <div className={style.container}>
                <div className={style.DatosContacto}>
                    <div>
                        <h5><BiMailSend className={style.icono}/>contacto@app-clima.com.co</h5>
                        <h5><GoLocation className={style.icono} />Barranquilla, Colombia</h5>
                        <h5>< AiOutlinePhone className={style.icono} />3004587925</h5>
                    </div>
                    <div className={style.redesSociales}>
                        <AiFillInstagram className={style.icono} />
                        <IoLogoWhatsapp className={style.icono} />
                        <BsFacebook className={style.icono}/>
                    </div>
                </div>
                <form   className={style.form}>
                    <p className={style.formTitle}>Contacto</p>
                    <label className={style.label}>Nombre</label>
                    <input placeholder='Escriba su nombre aquí'/>&nbsp;
                    <label className={style.label}>Correo Electrónico</label>
                    <input placeholder='Escriba su correo aquí'/>&nbsp;
                    <label className={style.label}>Asunto</label>
                    <input placeholder='Escriba el asunto aquí'/>&nbsp;
                    <label className={style.label}>Mensaje</label>
                    <input placeholder='Escriba el mensaje aquí...' />&nbsp;
                </form>
            </div>
        </div>
        
    )
}
import style from './ContactForm.module.css';
import { BiMailSend } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import { AiOutlinePhone } from 'react-icons/ai';

export function ContactForm(){
    return(
        <div className={style.containerAll}>
            <div className={style.DatosContacto}>
                <h5><BiMailSend />contacto@app-clima.com.co</h5>
                <h5><GrLocation />Calle 3b No.3b-311</h5>
                <h5>< AiOutlinePhone />3005922807</h5>
               

            </div>
            <form   className={style.form}>
                <h1>Contacto</h1>
                <label><h1>Nombre</h1></label>
                &nbsp;<input></input>
                <label><h1>Correo Electrónico</h1></label>
                &nbsp;<input></input>
                <label><h1>Asunto</h1></label>
                &nbsp;<input></input>
                <label><h1>Mensaje</h1></label>
                &nbsp;<input></input>
                
            </form>
        </div>
    )
}
import style from './ContactForm.module.css';
import { BiMailSend } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import { AiOutlinePhone } from 'react-icons/ai';

export function ContactForm(){
    return(
        <div className={style.containerAll}>
            <div className={style.container}>
                <div className={style.DatosContacto}>
                    <h5><BiMailSend />contacto@app-clima.com.co</h5>
                    <h5><GrLocation />Calle 3b No.3b-311</h5>
                    <h5>< AiOutlinePhone />3005922807</h5>
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
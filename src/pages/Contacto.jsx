import { ContactForm } from "../components/ContactForm";
import { NavBar } from "../components/NavBar";

export function Contacto(){
    const alerta= alert('Llena el formulario debajo');
    return(
        <div >
            {alerta}
            <NavBar />
            <ContactForm />
        </div>
    )

}
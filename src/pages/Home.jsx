import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { MainContent } from "../components/MainContent";

export function Home(){
    let alerta= alert('Bienvenido a la App del Clima por Ana Guzman H.');
    return(
        <div>
            {alerta}
            <NavBar />
            <MainContent />
            <Footer />
        </div>
    )
}
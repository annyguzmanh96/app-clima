import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { MainContent } from "../components/MainContent";

export function Home(){
    return(
        <div>
            <NavBar />
            <MainContent />
            <Footer />
        </div>
    )
}
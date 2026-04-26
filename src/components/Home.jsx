import Clases from "./Clases";
import Hero from "./Hero";
import Membresias from "./Membresias";
import NavBar from "./NavBar";
import Nosotros from "./Nosotros";
import Prueba from "./Prueba";
import Contacto from "./Contacto";
import Footer from "./Footer";
export default function Home() {
    return (
        <div className="w-full h-screen bg-studio-border">
            <NavBar />
            <div>
                <Hero id="hero" />
                <Nosotros id="nosotros" />
                <Membresias id="membresias" />
                <Clases id="clases" />
                <Prueba id="prueba" />
                <Contacto id="consultas" />
                <Footer />
            </div>
        </div>
    )
}
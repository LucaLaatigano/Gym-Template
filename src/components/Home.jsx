import Clases from "./Clases";
import Hero from "./Hero";
import Membresias from "./Membresias";
import NavBar from "./NavBar";
import Nosotros from "./Nosotros";

export default function Home() {
    return (
        <div className="w-full h-screen bg-studio-card">
            <NavBar />
            <div>
                <Hero id="hero" />´
                <Nosotros id="nosotros" />
                <Membresias id="membresias" />
                <Clases id="clases" />
            </div>
        </div>
    )
}
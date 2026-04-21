import Hero from "./Hero";
import Membresias from "./Membresias";
import NavBar from "./NavBar";

export default function Home() {
    return (
        <div className="w-full h-screen bg-studio-card">
            <NavBar />
            <div>
                <Hero id="hero" />
                <Membresias id="membresias" />
            </div>
        </div>
    )
}
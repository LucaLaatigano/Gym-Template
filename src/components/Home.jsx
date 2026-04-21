import Hero from "./Hero";
import NavBar from "./NavBar";

export default function Home() {
    return (
        <div className="w-full h-screen bg-studio-card">
            <NavBar />
            <div>
                <Hero />
                <div className="h-screen bg-studio-card"></div>
            </div>
        </div>
    )
}
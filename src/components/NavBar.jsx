import { useState } from "react"
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin)

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const handToScroll = (id) => {
        setIsOpen(false)
        gsap.to(window, {
            duration: 1.2,
            scrollTo: {
                y: `#${id}`,
                offsetY: 80,
            },
            ease: "power3.inOut"
        })
    }

    return (
        <nav className="fixed top-0 left-0 w-full z-100 border-b border-studio-borde bg-studio-dark/80 backdrop-blur-md">
            <div className="relative z-110 max-w-7xl mx-auto flex justify-between items-center h-20 px-6 bg-studio-dark">
                <h2 onClick={() => handToScroll("hero")} className="title-nav hover:cursor-pointer text-studio-crema text-xl font-bold">
                    form <span className="text-studio-oliva-lt italic">studio</span>
                </h2>

                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-studio-crema hover:text-studio-oliva-lt transition-colors cursor-pointer p-2"
                    >
                        {isOpen ? <IoCloseOutline className="size-9" /> : <IoMenuOutline className="size-9" />}
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => handToScroll("hero")} className="nav-link text-studio-crema hover:text-studio-oliva-lt transition-colors">Inicio</button>
                    <button onClick={() => handToScroll("nosotros")} className="nav-link text-studio-crema hover:text-studio-oliva-lt transition-colors">Nosotros</button>
                    <button onClick={() => handToScroll("membresias")} className="nav-link text-studio-crema hover:text-studio-oliva-lt transition-colors">Planes</button>
                    <button onClick={() => handToScroll("clases")} className="nav-link text-studio-crema hover:text-studio-oliva-lt transition-colors">Clases</button>
                    <button onClick={() => handToScroll("prueba")} className="nav-link text-studio-crema hover:text-studio-oliva-lt transition-colors">Prueba Gratuita</button>
                    <button onClick={() => handToScroll("consultas")} className="nav-link text-studio-crema hover:text-studio-oliva-lt transition-colors">Consultas</button>
                </div>
            </div>

            <div className={`
                fixed left-0 w-full bg-studio-dark border-b border-studio-borde transition-all duration-500 ease-in-out z-105
                ${isOpen ? "top-20 opacity-100" : "-top-full opacity-0"}
                md:hidden
            `}>
                <div className="flex flex-col p-6 gap-4">
                    <button onClick={() => handToScroll("hero")} className="text-left text-2xl font-display text-studio-crema hover:bg-studio-borde/50 rounded-2xl p-3 transition-colors">Inicio</button>
                    <button onClick={() => handToScroll("nosotros")} className="text-left text-2xl font-display text-studio-crema hover:bg-studio-borde/50 rounded-2xl p-3 transition-colors">Nosotros</button>
                    <button onClick={() => handToScroll("membresias")} className="text-left text-2xl font-display text-studio-crema hover:bg-studio-borde/50 rounded-2xl p-3 transition-colors">Planes</button>
                    <button onClick={() => handToScroll("clases")} className="text-left text-2xl font-display text-studio-crema hover:bg-studio-borde/50 rounded-2xl p-3 transition-colors">Clases</button>
                    <button onClick={() => handToScroll("prueba")} className="text-left text-2xl font-display text-studio-crema hover:bg-studio-borde/50 rounded-2xl p-3 transition-colors">Prueba Gratuita</button>
                    <button onClick={() => handToScroll("consultas")} className="text-left text-2xl font-display text-studio-crema hover:bg-studio-borde/50 rounded-2xl p-3 transition-colors">Consultas</button>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-101 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    )
}
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
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-studio-borde bg-studio-dark backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">

                <h2 className="title">
                    form <span className="text-studio-oliva-lt italic">studio</span>
                </h2>

                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-studio-crema hover:text-studio-oliva-lt transition-colors cursor-pointer"
                    >
                        {isOpen ? <IoCloseOutline className="size-9" /> : <IoMenuOutline className="size-9" />}
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#inicio" onClick={() => handToScroll("hero")} className="nav-link">Inicio</a>
                    <a href="#mebresias" onClick={() => handToScroll("membresias")} className="nav-link">Planes</a>
                    <a href="#clases" onClick={() => handToScroll("clases")} className="nav-link">Clases</a>
                    <a href="#contacto" onClick={() => handToScroll("contacto")} className="nav-link">Contacto</a>
                </div>
            </div>

            <div className={`
                fixed left-0 w-full bg-studio-dark  transition-all duration-500 ease-in-out z-[-1]
                ${isOpen ? "top-20 opacity-100" : "-top-full opacity-0"}
                 md:hidden
            `}>
                <div className="flex flex-col p-3 gap-3">
                    <a href="#inicio" onClick={() => handToScroll("hero")} className="text-2xl font-display text-studio-crema hover:cursor-pointer hover:bg-studio-borde/50 rounded-2xl p-3">Inicio</a>
                    <a href="#mebresias" onClick={() => handToScroll("membresias")} className="text-2xl font-display text-studio-crema hover:cursor-pointer hover:bg-studio-borde/50 rounded-2xl p-3">Planes</a>
                    <a href="#clases" onClick={() => handToScroll("clases")} className="text-2xl font-display text-studio-crema hover:cursor-pointer hover:bg-studio-borde/50 rounded-2xl p-3">Clases</a>
                    <a href="#contacto" onClick={() => handToScroll("contacto")} className="text-2xl font-display text-studio-crema hover:cursor-pointer hover:bg-studio-borde/50 rounded-2xl p-3">Contacto</a>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-studio-dark/60 z-[-2] md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    )
}
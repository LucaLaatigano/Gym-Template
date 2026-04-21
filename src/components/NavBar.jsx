import { useState } from "react"
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

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
                    <a href="#inicio" className="nav-link">Inicio</a>
                    <a href="#planes" className="nav-link">Planes</a>
                    <a href="#clases" className="nav-link">Clases</a>
                    <a href="#contacto" className="btn-primary py-2 px-6">Contacto</a>
                </div>
            </div>

            <div className={`
                fixed left-0 w-full bg-studio-dark  transition-all duration-500 ease-in-out z-[-1]
                ${isOpen ? "top-20 opacity-100" : "-top-full opacity-0"}
                 md:hidden
            `}>
                <div className="flex flex-col p-3 gap-3">
                    <a href="#inicio" onClick={() => setIsOpen(false)} className="text-2xl font-display text-studio-crema hover:cursor-pointer hover:bg-studio-borde/50 rounded-2xl p-3">Inicio</a>
                    <a href="#planes" onClick={() => setIsOpen(false)} className="text-2xl font-display text-studio-crema hover:cursor-pointer hover:bg-studio-borde/50 rounded-2xl p-3">Planes</a>
                    <a href="#clases" onClick={() => setIsOpen(false)} className="text-2xl font-display text-studio-crema hover:cursor-pointer hover:bg-studio-borde/50 rounded-2xl p-3">Clases</a>
                    <a href="#contacto" onClick={() => setIsOpen(false)} className="btn-primary w-full mt-4">Contacto</a>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-[-2] md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    )
}
import { useState } from "react";
export default function Prueba({ id }) {
    const [queryName, setQueryName] = useState("")
    const handleClick = (e) => {
        e.preventDefault()
        const telefono = "5493875661422";
        const mensaje = `Hola! Me gustaría hacer la Prueba gratiuta mi nombre es: ${queryName.toUpperCase()}`;
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }
    return (
        <section id={id} className="h-auto w-full p-10 bg-studio-oliva py-10 overflow-hidden">
            <div className="div-layout flex flex-col md:flex-row gap-15">
                <div className="flex flex-col gap-5 lg:w-1/2 flex-1">
                    <span className="anim text-[10px] md:text-xs text-studio-crema/60 font-medium tracking-[0.3em] uppercase">
                        OFERTA DE BIENVENIDA
                    </span>
                    <h3 className="anim text-studio-crema text-5xl md:text-7xl font-display leading-[1.1] tracking-tight">
                        Primera semana
                        <span className="block anim text-studio-crema italic mt-2">completamente gratis.</span>
                    </h3>
                </div>
                <div className="w-full flex flex-1 flex-col gap-5 justify-center">
                    <form onSubmit={(e) => handleClick(e)} className="flex flex-col gap-5">
                        <input type="text" required value={queryName} onChange={(e) => setQueryName(e.target.value)} className="w-full h-auto py-3 tracking-wider bg-studio-crema text-studio-oliva px-5 outline-none" placeholder="Tu nombre y apellido" />
                        <button type="submit" className="w-full text-studio-oliva h-auto py-3 bg-studio-crema px-5 tracking-wider">RESERVAR MI LUGAR</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
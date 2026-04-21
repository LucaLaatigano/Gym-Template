export default function Hero({ id }) {
    return (
        <section id={id} className="bg-studio-crema h-screen mt-10 flex flex-col justify-center md:justify-left items-center text-center px-6">
            <div className="z-20 grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl">
                <div className="flex flex-col gap-6 max-w-sm md:mt-10">
                    <span className="text-[10px] md:text-xs text-studio-oliva font-medium tracking-[0.3em] uppercase">
                        Salta, Argentina — Est. 2013
                    </span>
                    <h1 className="text-studio-dark text-5xl md:text-7xl font-display leading-[1.1] tracking-tight">
                        El cuerpo que querés construir
                        <span className="block text-studio-oliva italic mt-2">empieza aquí.</span>
                    </h1>
                    <p className="text-studio-gris text-sm leading-relaxed px-4">
                        Un espacio diseñado para el progreso real con equipamiento de alto rendimiento.
                    </p>
                    <div className="flex-center gap-3 md:flex-col">
                        <button className="btn bg-studio-oliva tracking-wider md:flex-1 md:w-full md:h-15">VER PLANES</button>
                        <button className="btn border border-studio-gris text-studio-gris tracking-wider md:flex-1 md:w-full md:h-15">VER CLASES </button>
                    </div>
                </div>
                <div className="hidden md:flex h-full w-full">
                    <img src="/gym.jpg" className="h-full w-full object-cover rounded-[30%]" />
                </div>
            </div>
        </section>
    )
}
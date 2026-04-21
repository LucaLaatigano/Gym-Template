export default function Hero({ id }) {
    return (
        <section id={id} className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            <div className="z-20 flex flex-col items-center gap-3 max-w-3xl">
                <span className="text-[10px] md:text-xs text-studio-oliva font-medium tracking-[0.3em] uppercase">
                    Salta, Argentina — Est. 2013
                </span>
                <h1 className="text-studio-crema text-5xl md:text-8xl font-display leading-[1.1] tracking-tight">
                    El cuerpo que querés construir
                    <span className="block text-studio-oliva italic mt-2">empieza aquí.</span>
                </h1>

                <p className="text-studio-crema/80 text-sm md:text-lg leading-relaxed max-w-xl">
                    Un espacio diseñado para el progreso real con equipamiento de alto rendimiento, coaches certificados y una comunidad que te acompaña.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button className="btn bg-studio-oliva text-studio-crema tracking-wider font-bold text-[11px] uppercase transition-all hover:bg-studio-crema hover:text-studio-dark">
                        VER PLANES
                    </button>
                    <button className="btn border border-studio-crema text-studio-crema tracking-wider font-bold text-[11px] uppercase transition-all hover:bg-studio-crema hover:text-studio-dark">
                        VER CLASES
                    </button>
                </div>
            </div>
            <div className="absolute inset-0 z-10">
                <img
                    src="/gym.jpg"
                    alt="Gym Background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

        </section>
    )
}
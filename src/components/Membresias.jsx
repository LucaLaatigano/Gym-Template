
export default function Membresias({ id }) {
    return (
        <section id={id} className="h-auto w-full bg-studio-card">
            <div className="flex flex-col">
                <div className="flex flex-col w-full p-5 gap-5">
                    <span className="anim text-[10px] md:text-xs text-studio-oliva font-medium tracking-[0.3em] uppercase">
                        MEMBRESIAS
                    </span>
                    <h3 className="anim text-studio-crema text-5xl md:text-7xl font-display leading-[1.1] tracking-tight">
                        Encontrá el plan
                        <span className="block anim text-studio-oliva italic mt-2">que te pertenece.</span>
                    </h3>
                </div>
                <div></div>
            </div>
        </section>
    )
}
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText, ScrollToPlugin } from "gsap/all"
import { useRef } from "react"
gsap.registerPlugin(ScrollToPlugin, SplitText)

export default function Hero({ id }) {
    const container = useRef()
    const bgImage = useRef()

    useGSAP(() => {
        const textElements = container.current.querySelectorAll('span.title-anim, h1.title-anim, p.title-anim')
        const textSplit = new SplitText(textElements, {
            type: 'lines',
            linesClass: "overflow-hidden"
        })

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

        tl
            .from(bgImage.current, {
                scale: 1.2,
                duration: 2.5,
                filter: "blur(10px)",
            })
            .from(textSplit.lines, {
                opacity: 0,
                y: 80,
                rotateX: 15,
                filter: "blur(12px)",
                duration: 1.5,
                stagger: 0.15,
            }, "-=2")
            .from(".btn-anim", {
                opacity: 0,
                y: 40,
                duration: 0.8, // Un poco más de duración para que sea suave
                stagger: 0.1,
                clearProps: "all"
            }, "<0.5") // Se solapa sutilmente con el final del texto

    }, { scope: container })
    return (
        <section ref={container} id={id} className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black">
            <div className="z-20 flex flex-col items-center gap-3 max-w-3xl">
                <span className="title-anim text-[10px] md:text-xs text-studio-oliva font-medium tracking-[0.3em] uppercase">
                    Salta, Argentina — Est. 2013
                </span>
                <h1 className="title-anim text-studio-crema text-5xl md:text-8xl font-display leading-[1.1] tracking-tight">
                    El cuerpo que querés construir
                    <span className="block text-studio-oliva italic mt-2">empieza aquí.</span>
                </h1>
                <p className="title-anim text-studio-crema/80 text-sm md:text-lg leading-relaxed max-w-xl">
                    Un espacio diseñado para el progreso real con equipamiento de alto rendimiento, coaches certificados y una comunidad que te acompaña.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 mt-8">
                    {/* Sin clases de opacity/translate — GSAP las maneja */}
                    <button className="btn btn-anim bg-studio-oliva text-studio-crema px-8 py-3 mr-5 tracking-wider font-bold text-[11px] uppercase transition-all hover:bg-studio-crema hover:text-studio-dark">
                        VER PLANES
                    </button>
                    <button className="btn btn-anim border border-studio-crema text-studio-crema px-8 py-3 tracking-wider font-bold text-[11px] uppercase transition-all hover:bg-studio-crema hover:text-studio-dark">
                        VER CLASES
                    </button>
                </div>
            </div>
            <div className="absolute inset-0 z-10 overflow-hidden">
                <img
                    ref={bgImage}
                    src="/gym.jpg"
                    alt="Gym Background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
        </section>
    )
}
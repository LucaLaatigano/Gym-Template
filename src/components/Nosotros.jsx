import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText, ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(SplitText, ScrollTrigger)
export default function Nosotros({ id }) {
    const container = useRef()

    useGSAP(() => {
        const titles = gsap.utils.toArray(".anim", container.current)
        const imgs = gsap.utils.toArray(".images", container.current)
        const splitParagraph = new SplitText(".para-anim", { type: "lines", linesClass: "overflow-hidden" })
        const allElements = [...titles, ...splitParagraph.lines]
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top center",
                toggleActions: "play none none none"
            },
            ease: "power1.inOut"
        })

        tl
            .from(allElements, {
                x: -100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
            })
            .from(imgs, {
                opacity: 0,
                stagger: 0.3,
                duration: 0.8
            })
    }, { scope: container })
    return (
        <section ref={container} id={id} className="h-auto w-full bg-studio-dark py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 gap-10">

                <div className="flex flex-col gap-5 lg:w-1/2">
                    <span className="anim text-[10px] md:text-xs text-studio-oliva font-medium tracking-[0.3em] uppercase">
                        NOSOTROS
                    </span>
                    <h3 className="anim text-studio-crema text-5xl md:text-7xl font-display leading-[1.1] tracking-tight">
                        Más que un gym.
                        <span className="block anim text-studio-oliva italic mt-2">Una comunidad.</span>
                    </h3>
                    <p className="para-anim text-studio-gris text-sm md:text-lg leading-relaxed max-w-xl">
                        Desde 2013 entrenamos a miles de personas en Salta. Coaches certificados,
                        programas personalizados y más de 1.200m² de instalaciones modernas.
                    </p>
                </div>

                <div className="w-full lg:w-5/12 max-w-md">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-3">
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src="/gym-grid-1.jpg"
                                    alt="gym photo"
                                    className="images w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src="/gym-grid-2.jpg"
                                    alt="gym photo"
                                    className="images w-full aspect-3/2 object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <div className="space-y-3 pt-6 md:pt-10">
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src="/gym-grid-3.jpg"
                                    alt="gym photo"
                                    className="images w-full aspect-3/2 object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src="/gym-grid-4.jpg"
                                    alt="gym photo"
                                    className="images w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)
export default function Clases({ id }) {
    const container = useRef()
    const classesData = [
        { num: "01", class: "Boxeo", paragraph: "Técnica, fuerza y cardio." },
        { num: "02", class: "CrossFit", paragraph: "Funcional de alta intensidad." },
        { num: "03", class: "Spinning", paragraph: "Resistencia sobre la bicicleta." },
        { num: "04", class: "Pilates", paragraph: "Control y conciencia corporal." },
        { num: "05", class: "Funcional", paragraph: "Movimientos para la vida real." },
        { num: "06", class: "Zumba", paragraph: "Baile y cardio en comunidad." },
    ]
    useGSAP(() => {
        const titleSplit = gsap.utils.toArray(".anim-item", container.current)
        const boxClasses = gsap.utils.toArray(".box-class", container.current);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top center",
                toggleActions: "play none none none",
            },
            ease: "power1.inOut"
        })

        tl
            .from(".grid-layout", {
                opacity: 0,
                duration: 0.8,
                ease: "power1.out"
            })
            .from(titleSplit, {
                x: -100,
                opacity: 0,
                duration: 1,
                stagger: 0.3
            })
            .from(boxClasses, {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                duration: 1,
            })
    }, { scope: container })
    return (
        <section ref={container} id={id} className="h-auto w-full py-20 bg-studio-dark text-white">
            <div className="div-layout">
                <div className="flex flex-col gap-6 mb-16">
                    <span className="anim-item text-[10px] md:text-xs text-studio-oliva font-medium tracking-[0.3em] uppercase">
                        ACTIVIDADES
                    </span>
                    <h3 className="anim-item text-5xl md:text-7xl font-display leading-[1.1] tracking-tight">
                        Clases para
                        <span className="anim-item block text-studio-oliva italic mt-2">cada objetivo.</span>
                    </h3>
                </div>
                <div className="grid-layout border-t border-studio-crema/20 md:border-t-0">
                    {classesData.map((item, index) => (
                        <div
                            key={index}
                            className={`
                box-class flex items-start gap-8 p-10 bg-studio-card w-full
                border-b border-studio-crema/20 
        
        
                md:border-r md:border-studio-crema/20
                ${(index + 1) % 2 === 0 ? "md:border-r-0" : ""} 
                ${index >= classesData.length - 2 ? "md:border-b-0" : "md:border-b"}

        
                lg:border-r lg:border-studio-crema/20
                ${(index + 1) % 3 === 0 ? "lg:border-r-0" : "lg:border-r"}
                ${index >= classesData.length - 3 ? "lg:border-b-0" : "lg:border-b"}

                xl:border-b xl:border-r
                ${(index + 1) % 3 === 0 ? "xl:border-r-0" : "xl:border-r"}
                ${index >= classesData.length - 3 ? "xl:border-b-0" : "xl:border-b"}
                    `}
                        >
                            <span className="text-studio-crema/40 text-md pt-1">
                                {item.num}
                            </span>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-studio-crema text-2xl font-serif tracking-tight">
                                    {item.class}
                                </h3>
                                <p className="text-studio-crema/60 text-base">
                                    {item.paragraph}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
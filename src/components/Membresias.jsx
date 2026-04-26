import { useGSAP } from "@gsap/react";
import { gsap } from "gsap"
import { IoMdCheckmark } from "react-icons/io";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(SplitText, ScrollTrigger)
export default function Membresias({ id }) {
    const container = useRef()
    useGSAP(() => {
        const titleSplit = gsap.utils.toArray(".anim-item", container.current)
        const planCards = gsap.utils.toArray(".plan", container.current);
        gsap.set(planCards, { opacity: 0, x: -100 })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top center",
                toggleActions: "play none none none",
            },
            ease: "power1.inOut"
        })

        tl
            .from(titleSplit, {
                x: -100,
                opacity: 0,
                duration: 1,
                stagger: 0.3
            })
            .to(planCards, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.3
            }, "-=0.4")
    }, { scope: container })
    const planesData = [
        {
            type: "ESENCIAL",
            price: "8.000",
            includes: ["Sala de Musculación", "Vestuarios premium", "2 clases / sem"]
        },
        {
            type: "COMPLETO",
            price: "14.000",
            includes: ["Todo del plan Esencial", "Clases ilimitadas", "1 sesión con coach", "Zona cardio premium"]
        },
        {
            type: "ELITE",
            price: "22.000",
            includes: ["Todo el plan Completo", "Coach ilimitado", "Plan nutricional", "Acceso 24/7"]
        }
    ];
    const handleClick = (plan) => {
        const telefono = "5493875661422";
        const mensaje = `Hola! Me gustaría inscribirme en el plan ${plan.toUpperCase()}`;
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }
    return (
        <section ref={container} id={id} className="h-auto w-full py-20 bg-studio-card text-white">
            <div className="div-layout">
                <div className="flex flex-col gap-6 mb-16">
                    <span className="anim-item text-[10px] md:text-xs text-studio-oliva font-medium tracking-[0.3em] uppercase">
                        PLANES
                    </span>
                    <h3 className="anim-item text-5xl md:text-7xl font-display leading-[1.1] tracking-tight">
                        Encontrá el plan
                        <span className="anim-item block text-studio-oliva italic mt-2">que te pertenece.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {planesData.map((plan, index) => (
                        <div
                            key={index}
                            className={`plan flex flex-col justify-between p-8 transition-all duration-300 hover:shadow-2xl ${index % 2 === 0 ? "bg-studio-borde" : "bg-studio-oliva"
                                }`}
                        >
                            <div className="flex flex-col gap-6">
                                <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-90">
                                    {plan.type}
                                </span>

                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-display font-bold tracking-wider">
                                        ${plan.price}
                                    </span>
                                    <span className="text-sm opacity-60">/mes</span>
                                </div>

                                <ul className="flex flex-col gap-4 mt-4">
                                    {plan.includes.map((item, i) => (
                                        <li key={i} className="text-sm flex items-start gap-3 opacity-90">
                                            <span>{<IoMdCheckmark className={`size-4 mt-1 ${index % 2 === 0 ? "text-studio-oliva" : "text-studio-crema"}`} />}</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button onClick={() => handleClick(plan.type)} className="mt-10 w-full py-4 rounded-full font-bold text-xs tracking-widest transition-all bg-white text-black hover:bg-studio-oliva hover:text-white border border-transparent hover:border-white/20">
                                ELEGIR PLAN
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
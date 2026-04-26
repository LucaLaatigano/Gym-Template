import { FaWhatsapp } from "react-icons/fa"
import { useState } from "react"
export default function Contacto({ id }) {
    const dataArr = [
        { type: "WHATSAPP", data: "+5493875661422" },
        { type: "DIRECCION", data: "Av. Belgrano 1240, Salta Capital" },
        { type: "HORARIOS", data: ["Lun – Vie 06:00 – 23:00", "Sáb – Dom 07:00 – 21:00"] },
    ]
    const [name, setName] = useState("")
    const [plan, setPlan] = useState("")
    const [msj, setMsj] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setName("")
        setPlan("")
        setMsj("")
        const phone = "5493875661422"
        let texto = `Hola! Soy ${name} y me interesa el *${plan}* de Forma Studio.`
        if (msj) texto += `\n\nConsulta: ${msj}`
        texto += `\n\n\n_Mensaje enviado desde el sitio web._`
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(texto)}`, "_blank")
    }
    return (
        <section id={id} className="h-auto w-full px-6 md:px-10 bg-studio-card py-20 overflow-hidden">
            <div className="div-layout grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1.5fr] gap-10 xl:gap-20">

                <div className="flex flex-col gap-5">
                    <span className="anim text-[10px] md:text-xs text-studio-oliva/60 font-medium tracking-[0.3em] uppercase">
                        CONSULTAS
                    </span>
                    <h3 className="anim text-studio-crema text-5xl md:text-6xl xl:text-7xl font-display leading-[1.1] tracking-tight">
                        Hablemos
                        <span className="block anim text-studio-oliva italic mt-2">sin compromiso.</span>
                    </h3>

                    <div className="hidden md:flex flex-col gap-8 mt-6 md:mt-10">
                        {dataArr.map((item, index) => (
                            <div key={index} className="flex flex-col gap-3">
                                <span className="uppercase text-sm text-studio-crema/40 font-medium tracking-widest border-b border-studio-crema/30 pb-4">
                                    {item.type}
                                </span>
                                <ul className="list-none space-y-2 pt-2">
                                    {Array.isArray(item.data) ? (
                                        item.data.map((line, idx) => (
                                            <li key={idx} className="text-base text-studio-crema/90 font-light">
                                                {line}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-base text-studio-crema/90 font-light">
                                            {item.data}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col border-studio-crema/30">
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3 py-5">
                            <span className="uppercase text-sm text-studio-crema/40 font-medium tracking-widest">
                                TU NOMBRE
                            </span>
                            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full p-5 rounded-sm h-auto text-sm text-studio-crema outline-none bg-studio-borde" placeholder="Ej: Juan Garcia" />
                        </div>
                        <div className="flex flex-col gap-3 py-5">
                            <span className="uppercase text-sm text-studio-crema/40 font-medium tracking-widest">
                                PLAN QUE TE INTERESA CONSULTAR
                            </span>
                            <div className="relative">
                                <select required value={plan} onChange={(e) => setPlan(e.target.value)} className="w-full p-5 rounded-sm text-sm outline-none bg-studio-borde appearance-none cursor-pointer pr-10 text-studio-crema">
                                    <option value="" disabled className="text-studio-crema/40">— Seleccioná un plan —</option>
                                    <option value="Esencial — $8.000 / mes">Esencial — $8.000 / mes</option>
                                    <option value="Completo — $14.000 / mes">Completo — $14.000 / mes</option>
                                    <option value="Élite — $22.000 / mes">Élite — $22.000 / mes</option>
                                    <option value="Quiero más información primero">Quiero más información primero</option>
                                </select>
                                <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 4L6 8L10 4" stroke="#5C7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 py-5">
                            <span className="uppercase text-sm text-studio-crema/40 font-medium tracking-widest">
                                CONSULTA
                            </span>
                            <textarea value={msj} onChange={(e) => setMsj(e.target.value)} rows={4} placeholder="¿Alguna pregunta?" className="w-full py-5 px-3 outline-none text-studio-crema h-48 bg-studio-borde rounded-sm resize-none" />
                        </div>
                        <button type="submit" className="h-auto py-3 px-5 text-studio-crema mb-5 w-full text-sm tracking-wider bg-studio-borde rounded-sm flex justify-center gap-3">
                            <FaWhatsapp className="size-4 text-studio-crema" /> ENVIAR POR WHATSAPP
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}
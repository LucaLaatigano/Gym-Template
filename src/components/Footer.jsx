import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="w-full bg-studio-bg flex flex-col px-6 md:px-10 pt-10 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-10">

                <div className="flex flex-col gap-3">
                    <span className="text-xs tracking-[0.25em] uppercase text-studio-oliva">
                        FORMA STUDIO
                    </span>
                    <p className="text-studio-crema/60 text-xs md:text-sm tracking-wider leading-relaxed">
                        Gimnasio de alto rendimiento en el corazón de Salta.{" "}
                        <span className="hidden md:inline">
                            Coaches certificados, equipamiento de primer nivel y una comunidad que te impulsa
                        </span>{" "}
                        desde 2013.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="text-studio-crema/40 hover:text-studio-oliva transition-colors duration-200">
                            <FaInstagram className="size-4" />
                        </a>
                        <a href="#" className="text-studio-crema/40 hover:text-studio-oliva transition-colors duration-200">
                            <FaFacebook className="size-4" />
                        </a>
                        <a href="#" className="text-studio-crema/40 hover:text-studio-oliva transition-colors duration-200">
                            <FaTiktok className="size-4" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="text-studio-oliva text-xs tracking-[0.25em] uppercase">
                        Contacto
                    </span>
                    <ul className="flex flex-col gap-1">
                        <li className="text-studio-crema/60 text-xs md:text-sm tracking-wider">Av. Belgrano 1240, Salta Capital</li>
                        <li className="text-studio-crema/60 text-xs md:text-sm tracking-wider">+54 9 387 566-1422</li>
                        <li className="text-studio-crema/60 text-xs md:text-sm tracking-wider">formastudio@gmail.com</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="text-studio-oliva text-xs tracking-[0.25em] uppercase">
                        Horarios
                    </span>
                    <ul className="flex flex-col gap-1">
                        <li className="text-studio-crema/60 text-xs md:text-sm tracking-wider">Lun – Vie: 06:00 – 23:00</li>
                        <li className="text-studio-crema/60 text-xs md:text-sm tracking-wider">Sáb – Dom: 07:00 – 21:00</li>
                        <li className="text-studio-crema/60 text-xs md:text-sm tracking-wider opacity-60">Feriados: Consultar</li>
                    </ul>
                </div>

            </div>

            <hr className="border-t border-studio-crema/20" />

            <p className="text-center text-studio-crema/40 text-xs tracking-wider mt-5">
                © 2025 Forma Studio · Todos los derechos reservados
            </p>
        </footer>
    )
}
import { useState } from "react";
import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa"; // importamos los íconos
import HamburgerButton from "./HamburgerButton";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Link } from "@inertiajs/react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const menuItems = [
        { name: "Inicio", link: "/" },
        {
            name: "Nosotros",
            link: "#",
            submenu: [
                { name: "Quienes Somos", link: "/quienes-somos" },
                { name: "Equipo Directivo", link: "/equipo-directivo" },
                { name: "Nuestra Historia", link: "#" },
                { name: "Politicas", link: "#" },
            ],
        },
        {
            name: "Experiencia",
            link: "#",
            submenu: [
                { name: "Casos De Exito", link: "#" },           
            ],
        },
         {
            name: "Lineas de negocio",
            link: "#",
            submenu: [
                { name: "INGENIERÍA & CONSULTORÍA", link: "#" },
                { name: "PLANTAS & EQUIPOS", link: "#" },
                { name: "ARMO QUIMICA", link: "#" },
                { name: "PRODUCTOS QUÍMICOS", link: "#" },
                { name: "CAPACITACIÓN & ENTRENAMIENTO", link: "#" },
            ],
        },
        { name: "Contáctanos", link: "#" },
    ];

    return (
        <header className="w-full bg-white shadow-sm border-b border-gray-200">
            <nav className="w-full flex justify-between items-center px-6 md:px-10 py-4 relative">
                
                {/* Logo clickeable con animación */}
                <a
                    href="https://tusitio.com"
                    className="flex items-center transform transition duration-300 hover:scale-105 hover:brightness-110"
                >
                    <img
                        src="https://res.cloudinary.com/dnbklbswg/image/upload/v1759791758/Logo_AH_con_HTW_wzxlez.jpg"
                        alt="Tecca Logo"
                        className="h-14 md:h-20 object-contain w-auto"
                    />
                </a>

                {/* Menú + Redes sociales */}
                <div className="flex items-center space-x-16">
                    <DesktopMenu menuItems={menuItems} />

                    {/* Redes sociales (solo desktop) */}
                    <div className="hidden md:flex items-center space-x-3">
                        {/* TikTok */}
                        <a
                            href="https://www.tiktok.com/@tuusuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white p-3 rounded-full transform transition duration-300 hover:scale-125"
                        >
                            <FaTiktok size={20} />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/tuusuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-3 rounded-full transform transition duration-300 hover:scale-125"
                        >
                            <FaInstagram size={20} />
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/tuusuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white p-3 rounded-full transform transition duration-300 hover:scale-125"
                        >
                            <FaFacebookF size={20} />
                        </a>
                    </div>

                    {/* Botón hamburguesa (solo mobile) */}
                    <HamburgerButton isOpen={menuOpen} toggle={toggleMenu}  />
                </div>

                <MobileMenu isOpen={menuOpen} menuItems={menuItems} />
            </nav>
        </header>
    );
}

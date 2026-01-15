import { useState } from "react";
import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa"; // importamos los íconos
import HamburgerButton from "./HamburgerButton";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { SiTiktok, SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const socialIcons = [
        { Icon: SiTiktok, name: "TikTok", href: "https://www.tiktok.com/@aquahealthbo" },
        { Icon: SiInstagram, name: "Instagram", href: "https://instagram.com/aqua_healthbolivia" },
        { Icon: SiFacebook, name: "Facebook", href: "https://www.facebook.com/profile.php?id=100093996880986" },
    ];

    const menuItems = [
        { name: "Inicio", link: "/" },
        {
            name: "Nosotros",
            link: "#",
            submenu: [

                { name: "Quienes Somos", link: "/quienes-somos" },
                { name: "Equipo Directivo", link: "/equipo-directivo" },
                { name: "Nuestra Historia", link: "/Historia" },
                { name: "Politicas", link: "/Politicas" },
            ],
        },
        {
            name: "Experiencia",
            link: "#",
            submenu: [
                { name: "Casos De Exito", link: "/CasosDeExito" },
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
        { name: "Contáctanos", link: "/Contacto" },
    ];

    return (
        <header className="w-full bg-white shadow-sm border-b border-gray-200">
            <nav className="w-full flex justify-between items-center px-6 md:px-10 py-4 relative">


                <a
                    href="/"
                    className="flex items-center transform transition duration-300 hover:scale-105 hover:brightness-110"
                >
                    <img
                        src="https://res.cloudinary.com/dnbklbswg/image/upload/v1759791758/Logo_AH_con_HTW_wzxlez.jpg"
                        alt="Tecca Logo"
                        className="h-14 md:h-20 object-contain w-auto"
                    />
                </a>


                <div className="flex items-center space-x-16">
                    <DesktopMenu menuItems={menuItems} />


                    <div className="hidden md:flex items-center gap-3">
                        {socialIcons.map(({ Icon, name, href }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={name}
                                className="p-3 rounded-full bg-gray-800 text-white transform transition duration-300 hover:scale-125 hover:bg-teal-500"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>


                    <HamburgerButton isOpen={menuOpen} toggle={toggleMenu} />
                </div>

                <MobileMenu isOpen={menuOpen} menuItems={menuItems} />
            </nav>
        </header>
    );
}

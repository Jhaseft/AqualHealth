import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import Header from "@/Components/Inicio/Header/Header";
import AquaHealthLineasNegocio from "@/Components/LienasNegocio/AquaHealthLineasNegocio";

export default function PLantasEquipos() {
    const lineasDeNegocio = [
    {
        titulo: "PLANTAS & EQUIPOS",
        imagen: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768512603/Captura_de_pantalla_2026-01-15_172929_gb2fjp.png", // Reemplaza con tu imagen
        servicios: [
            "Filtros de Arena – Carbón Activado",
            "Ablandadores - Desionizadores",
            "Plantas de Osmosis Inversa",
            "Plantas de Agua Potable",
            "Plantas de Tratamiento de Aguas Negras y Grises",
            "Plantas de Tratamiento de Riles Industriales",
            "Lámparas UV – Halógenas - Ozonizadores"
        ],
        imagenfondo: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768529827/17_zqh39k.png", // Reemplaza con tu imagen de fondo
      bg: { from: '#1e3a5f', to: '#0f2540' }
    }
];
    return (
        <>
            <Head title="Plantas-AquaHealth" />
            <Header />
            <Banner title="Plantas y Equipos" description="Tecnología avanzada en sistemas de tratamiento y purificación"/>
            <AquaHealthLineasNegocio lineasDeNegocio={lineasDeNegocio}/>
            <Footer/>
            <ScrollToTopButton />
        </>
    );
}

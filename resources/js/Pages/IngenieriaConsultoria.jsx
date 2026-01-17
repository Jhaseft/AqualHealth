import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import Header from "@/Components/Inicio/Header/Header";
import AquaHealthLineasNegocio from "@/Components/LienasNegocio/AquaHealthLineasNegocio";

export default function IngenieriaConsultoria() {
const lineasDeNegocio = [
    {
        titulo: "INGENIERÍA & CONSULTORÍA",
        imagen: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768621332/WhatsApp_Image_2026-01-16_at_23.00.22_feealh.jpg", // Reemplaza con tu imagen
        servicios: [
            "Diseño y Construcción de Plantas",
            "Consultoría Técnica del Agua",
            "Consultoría Medio Ambiental",
            "Desarrollo de Proyectos",
            "Mantenimiento Industrial",
            "Ingeniería Conceptual, Básica y en Detalle",
            "Optimización de Plantas y Equipos",
            "Montaje y Puesta en Marcha de Plantas"
        ],
        imagenfondo: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768529828/16_jlbkwr.png", // Reemplaza con tu imagen de fondo
        bg: { from: '#1ABC9C', to: '#16A085' } // Teal/Turquesa
    }
];
    return (
        <>
            <Head title="Ingenieria-AquaHealth" />
            <Header />
            <Banner title="Ingenieria y Consultoria" description="Soluciones técnicas integrales para el tratamiento del agua"/>
            <AquaHealthLineasNegocio lineasDeNegocio={lineasDeNegocio}/>
            <Footer/>
            <ScrollToTopButton />
        </>
    );
}

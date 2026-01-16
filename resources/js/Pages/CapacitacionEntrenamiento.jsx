import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import Header from "@/Components/Inicio/Header/Header";
import AquaHealthLineasNegocio from "@/Components/LienasNegocio/AquaHealthLineasNegocio";

export default function CapacitacionEntrenamiento() {
    const lineasDeNegocio = [
    {
        titulo: "CAPACITACIÓN & ENTRENAMIENTO",
        imagen: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768530615/963eda69-9685-4570-a104-c106ab941542.png", // Reemplaza con tu imagen
        servicios: [
            "Operador en Sistemas de Enfriamiento",
            "Aguas Negras y Grises",
            "Riles Industriales",
            "Análisis Físico Químico de Aguas",
            "Tratamiento de Aguas Residuales",
            "Seguridad Industrial – Ocupacional",
            "Legislación Boliviana",
            "Minería",
            "Extracción",
            "Flotación",
            "Siderurgia",
            "SGI Sistema Integrado de Gestión",
            "Calidad – Seguridad"
        ],
        imagenfondo: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768529853/20_l4lk4n.png", // Reemplaza con tu imagen de fondo
       bg: { from: '#1e3a5f', to: '#0f2540' }
    }
];
    return (
        <>
            <Head title="Capacitacion-AquaHealth" />
            <Header />
            <Banner title="Capacitacion y Entrenamiento" description="Formación profesional especializada en tratamiento de aguas"/>
            <AquaHealthLineasNegocio lineasDeNegocio={lineasDeNegocio}/>
            <Footer/>
            <ScrollToTopButton />
        </>
    );
}

import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import Header from "@/Components/Inicio/Header/Header";
import AquaHealthLineasNegocio from "@/Components/LienasNegocio/AquaHealthLineasNegocio";

export default function ProductosQuimicos() {

    const lineasDeNegocio = [
    {
        titulo: "PRODUCTOS QUÍMICOS",
        imagen: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768621308/WhatsApp_Image_2026-01-16_at_23.01.42_k1kxxe.jpg", // Reemplaza con tu imagen
        servicios: [
            "Calderos",
            "Enfriamiento",
            "Agua Potable",
            "Osmosis Inversa",
            "Efluentes Domésticos e Industriales",
            "Anti-incrustantes",
            "Inhibidores de Corrosión",
            "Biocidas",
            "Anti Espumantes",
            "Floculantes",
            "Coagulantes",
            "Hipoclorito",
            "Pastillas Cloradoras",
            "Limpiezas Químicas: Ácida y Alcalina",
        ],
        imagenfondo: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768529828/18_bl1gyw.png", // Reemplaza con tu imagen de fondo
        bg: { from: '#52C41A', to: '#3AA717' } // Verde grass vibrante
    }
];

    return (
        <>
            <Head title="Productos-AquaHealth" />
            <Header />
            <Banner title="Productos Quimicos" description="Soluciones químicas especializadas para cada proceso"/>
            <AquaHealthLineasNegocio lineasDeNegocio={lineasDeNegocio}/>
            <Footer/>
            <ScrollToTopButton />
        </>
    );
}

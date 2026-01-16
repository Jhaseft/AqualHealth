import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import Header from "@/Components/Inicio/Header/Header";
import AquaHealthLineasNegocio from "@/Components/LienasNegocio/AquaHealthLineasNegocio";

export default function ArmoQuimica() {
    const lineasDeNegocio = [
        {
            titulo: "ARMO QUIMICA",
            imagen: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768530194/14db42f6-9aad-48f2-acd2-3b6a334f59de.png",
            servicios: [
                "Material de Laboratorio",
                "pH metro",
                "Espectrofotómetro",
                "Conductivimetro",
                "Kit de Dureza Total",
                "Kit de Cloruros",
                "Kit de Alkalinidades",
                "Kit de Sulfatos",
                "Laboratorio de Análisis de Aguas",
                "Físico Químico",
                "Residuales",
                "Potable",
                "Pozo",
                "Industriales (Vapor - Enfriamiento)"
            ],
            imagenfondo: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768529828/19_yyf9yt.png",
            bg: { from: '#2ECC71', to: '#27AE60' }
        }
    ];

    return (
        <>
            <Head title="Armo Quimica-AquaHealth" />
            <Header />
            <Banner title="Armo Quimica" description="Equipos de laboratorio y análisis profesional del agua"/>
            <AquaHealthLineasNegocio lineasDeNegocio={lineasDeNegocio}/>
            <Footer/>
            <ScrollToTopButton />
        </>
    );
}
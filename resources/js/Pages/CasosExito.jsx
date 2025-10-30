import Header from "@/Components/Inicio/Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import CasosExitoCard from "@/Components/CasosDeExito/CasosExito";

// Arreglo de casos de éxito
const casos = [
    {
        imgSrc: "https://res.cloudinary.com/dnbklbswg/image/upload/v1761090251/Captura_de_pantalla_2025-10-21_194348_udykwa.png",
        descripcion: (
            <>
                <strong>
                    EMPRESA BOLIVIANA DE ALIMENTOS Y DERIVADOS - EBA
                </strong>{" "}
                <br />
                “PLANTA INDUSTRIALIZADORA DE LA QUINUA” <br />
                PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES INDUSTRIALES: <br />
                CAUDAL: 345.6 M3/DIA
            </>
        ),
        bgColor: "bg-blue-50",
        imgLeft: true,
    },
    {
        imgSrc: "https://res.cloudinary.com/dnbklbswg/image/upload/v1761090289/Captura_de_pantalla_2025-10-21_194440_liltxd.png",
        descripcion: (
            <>
                <strong>EMPRESA BOLIVIANA DE ALIMENTOS Y DERIVADOS- EBA</strong>{" "}
                <br />
                “PLANTA PROCESADORA DE LACTEOS IVIRGARZAMA <br />
                PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES INDUSTRIALES
                <br />
                CAUDAL: 240 M3/DIA
            </>
        ),
        bgColor: "bg-white",
        imgLeft: false,
    },
    {
        imgSrc: "https://res.cloudinary.com/dnbklbswg/image/upload/v1761090310/Captura_de_pantalla_2025-10-21_194501_easbgu.png",
        descripcion: (
            <>
                <strong>EMPRESA BOLIVIANA DE ALIMENTOS Y DERIVADOS- EBA</strong>{" "}
                <br />
                “PLANTA PROCESADORA DE LACTEOS SAN ANDRES <br />
                PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES INDUSTRIALES
                <br />
                CAUDAL: 120 M3/DIA
            </>
        ),
        bgColor: "bg-blue-50",
        imgLeft: true,
    },
    {
        imgSrc: "https://res.cloudinary.com/dnbklbswg/image/upload/v1761090310/Captura_de_pantalla_2025-10-21_194501_easbgu.png",
        descripcion: (
            <>
                <strong>EMPRESA BOLIVIANA DE petroleo Y DERIVADOS- EBA</strong>{" "}
                <br />
                “PLANTA PROCESADORA DE LACTEOS SAN ANDRES <br />
                PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES INDUSTRIALES
                <br />
                CAUDAL: 120 M3/DIA
            </>
        ),
        bgColor: "bg-blue-50",
        imgLeft: false,
    },
];

export default function CasosExito() {
    return (
        <>
            <Head title="Casos de Éxito - AquaHealth" />
            <Header />

            <Banner
                title="Nuestra Experiencia"
                description="Conoce nuestros Casos De Éxito."
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Casos-de-Exito" },
                ]}
                imageUrl="https://res.cloudinary.com/dnbklbswg/image/upload/v1761087411/Operaciones_aqua_wqhiz1.jpg"
            />

            {casos.map((caso, index) => (
                <CasosExitoCard
                    key={index}
                    imgSrc={caso.imgSrc}
                    descripcion={caso.descripcion}
                    bgColor={caso.bgColor}
                    imgLeft={caso.imgLeft}
                />
            ))}

            <Footer />
            <ScrollToTopButton />
        </>
    );
}

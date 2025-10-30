// components/WhoWeAreHeader.jsx
import CardInfoSection from "../Quienes_Somos/CardInfoSection";

export default function EngineeringConsultingPrincipal() {
    // Arreglo con todas las secciones
    const sections = [
        {
            title: "INGENIERÍA & CONSULTORÍA",
            paragraphs: [
                '<ul class="list-disc list-inside ml-4">',
                '<li>Diseño y Construcción de Plantas</li>',
                '<li>Consultoría Técnica del Agua</li>',
                '<li> Consultoría Medio Ambiental</li>',
                '<li>Desarrollo de Proyectos</li>',
                '<li>Mantenimiento de Proyectos</li>',
                '<li> Ingeniería Conceptual, Básica y en Detalle</li>',
                '<li> Optimización de Plantas y Equipos</li>',
                '<li> Montaje y Puesta en Marcha de Plantas </li>',
                '</ul>'
             ],
            logo: {
                src: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761696432/Captura_de_pantalla_2025-10-28_200654_bugwg9.jpg",
                alt: "Aqual Health",
                href: "https://tuSitio.com",
                hoverScale: 1.05,
                hoverBrightness: 1.05,
            },
            imageLeft: false, // ✅ Imagen a la izquierda
            bgColor: "bg-blue-100",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b bg-white">
            <div className="container mx-auto px-4 py-8 md:py-12">
                {sections.map((section, index) => (
                    <CardInfoSection
                        key={index}
                        data={section}
                        imageScale={1.3}
                    />
                ))}
            </div>
        </div>
    );
}

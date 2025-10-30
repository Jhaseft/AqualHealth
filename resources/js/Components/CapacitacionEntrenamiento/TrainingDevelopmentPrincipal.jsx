// components/WhoWeAreHeader.jsx
import CardInfoSection from "../Quienes_Somos/CardInfoSection";

export default function TrainingDevelopmentPrincipal() {
    // Arreglo con todas las secciones
    const sections = [
        {
            title: "CAPACITACIÓN & ENTRENAMIENTO",
            paragraphs: [
                '<ul class="list-disc list-inside ml-4">',
                '<li>Operador en sistemas de enfriamiento</li>',
                '<li>Aguas Negras y Grises</li>',
                '<li>Riles Industriales</li>',
                '<li>Análisis Físico Químico de Aguas</li>',
                '<li>Tratamiento de Aguas Residuales</li>',
                '<li>Segurida Industrial-Ocupacional</li>',
                '<li>Legislación Boliviana</li>',
                '<li>Minería Extracción Flotación Siderurgia</li>',
                '<li>SGI Sistemas Integrado de Gestión</li>',
                '<li>Calidad-Seguridad</li>',
                '</ul>'
             ],
            logo: {
                src: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761695975/Captura_de_pantalla_2025-10-28_195905_aizvv7.jpg",
                alt: "Aqual Health",
                href: "https://tuSitio.com",
                hoverScale: 1.05,
                hoverBrightness: 1.05,
            },
            imageLeft: false, // ✅ Imagen a la izquierda
            bgColor: "bg-gray-100",
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

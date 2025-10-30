// components/WhoWeAreHeader.jsx
import CardInfoChemical from "./CardInfoChemical";

export default function ArmoChemicalPrincipal() {
    // Arreglo con todas las secciones
    const sections = [
        {
            title: "ARMO QUIMICA",
            paragraphs: [
                '<span class="font-bold">Material de laboratorio:</span> pH metro, Espectrofotómetro, Conductivimetro',
                '<span class="font-bold">Kits de análisis:</span> Kit de Dureza Total, Kit de Cloruros, Kit de Alcalinidades, Kit de Sulfito',
                '<span class="font-bold">Laboratorio de Análisis de Aguas:</span>',
                '<ul class="list-disc list-inside ml-4">',
                '<li>Físico Químico</li>',
                '<li>Residuales</li>',
                '<li>Potable</li>',
                '<li>Pozo</li>',
                '<li>Industriales (Vapor - Enfriamiento)</li>',
                '</ul>'
             ],
            logo: {
                src: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761688775/Captura_de_pantalla_2025-10-28_175832_r4x8ta.jpg",
                alt: "Aqual Health",
                href: "https://tuSitio.com",
                hoverScale: 1.05,
                hoverBrightness: 1.05,
            },
            imageLeft: false, // ✅ Imagen a la izquierda
            bgColor: "bg-green-100",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b bg-white">
            <div className="container mx-auto px-4 py-8 md:py-12">
                {sections.map((section, index) => (
                    <CardInfoChemical
                        key={index}
                        data={section}
                        imageScale={1.3}
                    />
                ))}
            </div>
        </div>
    );
}

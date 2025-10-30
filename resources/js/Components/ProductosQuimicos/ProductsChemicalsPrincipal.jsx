// components/WhoWeAreHeader.jsx
import CardInfoChemical from "../ArmoQuimica/CardInfoChemical";
import CardInfoSection from "../Quienes_Somos/CardInfoSection";

export default function ProductsChemicalsPrincipal() {
    // Arreglo con todas las secciones
    const sections = [
        {
            title: "PRODUCTOS QUÍMICOS",
            paragraphs: [
                '<ul class="list-disc list-inside ml-4">',
                '<li>calderos</li>',
                '<li>Ablandadores - Desionizadores</li>',
                '<li>Plantas de Osmosis Inversa</li>',
                '<li>Plantas de Agua Potable</li>',
                '<li>Plantas de Tratamiento de Aguas Negras y Grises</li>',
                '<li>Plantas de Tratamiento de Riles Industriales</li>',
                '<li>Lámparas UV – Halógenas - Ozonizadores</li>',
                '</ul>'
             ],
            logo: {
                src: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761697832/Captura_de_pantalla_2025-10-28_203016_hvfldr.jpg",
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

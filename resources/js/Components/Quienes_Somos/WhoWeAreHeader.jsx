// components/WhoWeAreHeader.jsx
import CardInfoSection from "./CardInfoSection"
import ValoresCarousel from "./CarruselValores"

export default function WhoWeAreHeader() {
    
    const sections = [
        {
            title: "Sobre Nosotros",
            paragraphs: [
                'Es una empresa de <span class="font-semibold">"XR" Business Group</span>, que trabaja con principios de ética y responsabilidad buscando mantener a la naturaleza intacta, cuidando el medio ambiente para el bienestar de generaciones futuras.',
                "A través de nuestras alianzas estratégicas nacionales e internacionales propondremos la mejor solución, garantizando la satisfacion en la conclusión de cada proyecto.",
            ],
            logo: {
                src: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761103013/samples/animals/reindeer.jpg",
                alt: "Aqual Health",
                href: "https://tuSitio.com",
                hoverScale: 1.05,
                hoverBrightness: 1.05,
            },
            imageLeft: false, 
            bgColor: "bg-gray-50",
        },
        {
            title: "MISIÓN",
            paragraphs: [
                "El compromiso de brindar una solución con tecnologías innovadoras a la medida de las necesidades de nuestros clientes comerciales, residenciales e industriales en materia de consultoría, tecnologías en temas de tratamiento de agua y gestión ambiental, nos obliga a brindar ingeniería confiable y ofrecer equipos y sistemas de avanzada tecnología, respaldada en un exelente servicio de asesoría post venta, que demuestra nuestro profecional.",
            ],
            logo: {
                src: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761103032/cld-sample-2.jpg",
                alt: "Misión Aqual Health",
                hoverScale: 1.05,
                hoverBrightness: 1.05,
            },
            imageLeft: true, 
            bgColor: "bg-blue-50",
        },
        {
            title: "VISIÓN",
            paragraphs: [
                "Ser una empresa referente en la construcción de plantas y equipos con un desarrollo constante de nuevas tecnologías, destacada por la calidad e innovación de nuestros servicios, productos y  la superación de las expectativas de nuestros clientes.",
                "Mantener los principios de calidad, seguridad y sobre todo cuidado del medio ambiente desarrollando tecnologías aplicadas a servicios especializados de asesoría en sistemas de tratamiento de agua y la excelencia en la gestión ambiental.",
            ],
            logo: {
                src: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761103012/samples/ecommerce/analog-classic.jpg",
                alt: "Visión Aqual Health",
                hoverScale: 1.05,
                hoverBrightness: 1.05,
            },
            imageLeft: false, 
            bgColor: "bg-white",
        },
    ];

    // Arreglo de valores con imágenes y frases para el carrusel
    const valores = [
        {
            text: "Integridad en todo lo que hacemos",
            bgImage:
                "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761103028/samples/coffee.jpg",
        },
        {
            text: "Trabajo en equipo para lograr más",
            bgImage:
                "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761103032/cld-sample-2.jpg",
        },
        {
            text: "Innovación constante",
            bgImage:
                "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761103016/samples/animals/three-dogs.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b bg-white">
            <div className="container mx-auto px-4 py-8 md:py-12">
                {sections.map((section, index) => (
                    <CardInfoSection
                        key={index}
                        data={section}
                        imageScale={1.2}
                    />
                ))}
            </div>

            <div className="w-full bg-blue-50 py-12"> {/* 🔹 Fondo celeste agregado aquí */}
              
                <ValoresCarousel values={valores} />
            </div>
        </div>
    );
}

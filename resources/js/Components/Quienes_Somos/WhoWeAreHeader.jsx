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
                src: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768509205/DSC_6247_1_yy7mvj.jpg",
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
                src: "https://res.cloudinary.com/dnbklbswg/image/upload/v1760223620/Fondo_Aquahealth_bkze5p.jpg",
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
                src: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768508732/WhatsApp_Image_2026-01-15_at_16.17.38_so7jcv.jpg",
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
            
        },
        {
            text: "Trabajo en equipo para lograr más",
          
        },
        {
            text: "Innovación constante",
           
        },
    ];

   return (
    <div className="bg-white bg-gradient-to-b from-white via-gray-50 to-white">
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {sections.map((section, index) => (
          <CardInfoSection key={index} data={section} imageScale={1.2} />
        ))}
      </div>

  
      <div className="w-full bg-blue-50 py-12 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Nuestros Valores
        </h2>
        <ValoresCarousel values={valores} />
      </div>
    </div>
  );
}

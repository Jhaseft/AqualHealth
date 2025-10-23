import Header from "@/Components/Inicio/Header/Header";
import CarruselFotos from "@/Components/Fotos/CarruselFotos";
import CarruselFotos2 from "@/Components/Fotos/CarruselFotos2";

import { Head } from "@inertiajs/react";
import Resumen from "@/Components/Inicio/Contenido/Resumen";
import Operaciones from "@/Components/Inicio/Contenido/Operaciones";
import CasosDeExito from "@/Components/Inicio/Contenido/CasosDeExito";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";

export default function Welcome() {
  const demoImages = [
    {
      public_id: "foto1",
      secure_url:
        "https://res.cloudinary.com/dnbklbswg/image/upload/v1760225307/Presentacion_aqua_lwwiut.png",
      topText: "Juntos sanaremos el planeta",
      bottomRight: "#HealTheWorld",
    },
    {
      public_id: "foto3",
      secure_url:
        "https://res.cloudinary.com/dnbklbswg/image/upload/v1760226156/Presentacion_de_servicio_2_bapqb2.png",
      bottomLeft: "Soluciones de ingeniería en tratamiento del agua",
    },
    {
      public_id: "foto2",
      secure_url:
        "https://res.cloudinary.com/dnbklbswg/image/upload/v1760226343/Presentacion_de_plantas_wpcerh.png",
      bottomLeft: "Innovación en procesos de ingeniería",
    },
  ];

  const demoImages2 = [
  {
    secure_url: "https://res.cloudinary.com/dnbklbswg/image/upload/v1761108370/Compromiso_Ambiental_owpd7z.jpg",
    title: "Compromiso Ambiental",
    description: "Aqua Health se dedica a preservar el medio ambiente a través de prácticas sostenibles y soluciones ecológicas, buscando siempre minimizar el impacto ambiental.",
  },
  {
    secure_url: "https://res.cloudinary.com/dnbklbswg/image/upload/v1761109495/Innovaci%C3%B3n_Tecnol%C3%B3gica_fywy6i.jpg",
    title: "Innovación Tecnológica",
    description: "Nos enfocamos en el desarrollo y aplicación de tecnologías avanzadas para el tratamiento de agua, destacándose por su constante evolución y adaptabilidad a nuevas tecnologías.",
  },
  {
    secure_url: "https://res.cloudinary.com/dnbklbswg/image/upload/v1761109500/Calidad_y_Excelencia_fezwbf.jpg",
    title: "Calidad y Excelencia",
    description: "Aqua Health prioriza la calidad en cada uno de sus proyectos y servicios, estableciendo altos estándares que aseguran resultados confiables y satisfactorios para sus clientes.",
  },
  {
    secure_url: "https://res.cloudinary.com/dnbklbswg/image/upload/v1761134394/Integridad_y_%C3%89tica_kjkyf5.jpg",
    title: "Integridad y Ética",
    description: "La marca opera bajo principios éticos, manteniendo un compromiso firme con la transparencia y la responsabilidad en cada aspecto de sus servicios.",
  },
  {
    secure_url: "https://res.cloudinary.com/dnbklbswg/image/upload/v1761134394/Atenci%C3%B3n_y_Asesor%C3%ADa_Personalizada_oy0sfw.jpg",
    title: "Atención y Asesoría Personalizada",
    description: "Aqua Health valora las necesidades únicas de cada cliente, ofreciendo un servicio de asesoría dedicado y un acompañamiento postventa que asegure la satisfacción y confianza a largo plazo.",
  },
];
  

  return (
   <>
      <Head title="Inicio-AquaHealth"/>
      <Header />
      
      <CarruselFotos images={demoImages} />
      <Resumen/>
      <Operaciones/>
      <CasosDeExito/>  
      <CarruselFotos2 images={demoImages2} />

      <Footer  />
      <ScrollToTopButton />
    </>
  );
}

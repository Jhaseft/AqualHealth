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
        <strong>EMPRESA BOLIVIANA DE ALIMENTOS Y DERIVADOS - EBA</strong> <br />
        “PLANTA INDUSTRIALIZADORA DE LA QUINUA” <br />
        PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES INDUSTRIALES: <br />
        CAUDAL: 345.6 M3/DIA
      </>
    ),
    bgColor: "bg-blue-50",
    imgLeft: true
  },
  {
    imgSrc: "https://res.cloudinary.com/dnbklbswg/image/upload/v1761090289/Captura_de_pantalla_2025-10-21_194440_liltxd.png",
    descripcion: (
      <>
        <strong>EMPRESA BOLIVIANA DE ALIMENTOS Y DERIVADOS- EBA</strong> <br />
       “PLANTA PROCESADORA DE LACTEOS IVIRGARZAMA <br />
       PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES INDUSTRIALES<br />
       CAUDAL: 240 M3/DIA
      </>
    ),
    bgColor: "bg-white",
    imgLeft: false
  },
  {
    imgSrc: "https://res.cloudinary.com/dnbklbswg/image/upload/v1761090310/Captura_de_pantalla_2025-10-21_194501_easbgu.png",
    descripcion: (
      <>
        <strong>EMPRESA BOLIVIANA DE ALIMENTOS Y DERIVADOS- EBA</strong> <br />
       “PLANTA PROCESADORA DE LACTEOS SAN ANDRES <br />
      PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES INDUSTRIALES<br />
       CAUDAL: 120 M3/DIA
      </>
    ),
    bgColor: "bg-blue-50",
    imgLeft: true
  },
  {
    imgSrc: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768512528/33ba4501-b7a4-4c70-84b6-525e2255b794.png", // Aquí coloca la URL de la imagen
    descripcion: (
      <>
        <strong>GAS TRANS BOLIVIANO - Y.P.F.B. TRANSPORTE</strong> <br />
        “PLANTA POTABILIZADORA DE AGUA” <br />
        ESTACION CHIQUITOS <br />
        CAUDAL: 7 M3/HORA
      </>
    ),
    bgColor: "bg-white",
    imgLeft: false
  },
  {
    imgSrc: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768512602/Captura_de_pantalla_2026-01-15_172901_zi7ozc.png", // Aquí coloca la URL de la imagen
    descripcion: (
      <>
        <strong>GAS TRANS BOLIVIANO - Y.P.F.B. TRANSPORTE</strong> <br />
        “PLANTA POTABILIZADORA DE AGUA” <br />
        ESTACION CHIQUITOS <br />
        CAUDAL: 7 M3/HORA
      </>
    ),
    bgColor: "bg-blue-50",
    imgLeft: true
  },
  {
    imgSrc: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768512603/Captura_de_pantalla_2026-01-15_172929_gb2fjp.png", // Aquí coloca la URL de la imagen
    descripcion: (
      <>
        <strong>SERVICIO DE DESARROLLO DE LAS EMPRESAS PÚBLICAS - SEDEM</strong> <br />
        “PLANTA INDUSTRIALIZADORA DE LA HOJA DE COCA” <br />
        PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES <br />
        CAUDAL: 168 M3/DIA
      </>
    ),
    bgColor: "bg-white",
    imgLeft: false
  },
  {
    imgSrc: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768512605/Captura_de_pantalla_2026-01-15_172936_qi9tsx.png", // Aquí coloca la URL de la imagen
    descripcion: (
      <>
        <strong>SERVICIO DE DESARROLLO DE LAS EMPRESAS PÚBLICAS - SEDEM</strong> <br />
        “PLANTA INDUSTRIALIZADORA DE LA HOJA DE COCA” <br />
        PLANTA POTABILIZADORA DE AGUA <br />
        CAUDAL: 10 M3/HORA
      </>
    ),
    bgColor: "bg-blue-50",
    imgLeft: true
  },
  {
    imgSrc: "https://res.cloudinary.com/dnbklbswg/image/upload/v1768512605/Captura_de_pantalla_2026-01-15_172945_jmozbq.png", // Aquí coloca la URL de la imagen
    descripcion: (
      <>
        <strong>MINISTERIO DE DESARROLLO PRODUCTIVO</strong> <br />
        “IMPLEMENTACIÓN DE LA INDUSTRIA DE CAMELIDOS DE ORURO” <br />
        PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES <br />
        CAUDAL: 140 M3/DIA
      </>
    ),
    bgColor: "bg-white",
    imgLeft: false
  }
];

export default function CasosExito() {
  return (
    <>
      <Head title="Casos de Éxito - AquaHealth" />
      <Header />

      <Banner 
        title="Nuestra Experiencia" 
        description="Conoce nuestros Casos De Éxito."
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

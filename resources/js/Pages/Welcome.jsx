import Header from "@/Components/Inicio/Header/Header";
import CarruselFotos from "@/Components/Fotos/CarruselFotos";
import { Head } from "@inertiajs/react";


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

  return (
    <>
      <Head title="Inicio-AquaHealth"/>
      <Header />
      <CarruselFotos images={demoImages} />
    </>
  );
}

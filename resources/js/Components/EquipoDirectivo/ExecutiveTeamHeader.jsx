// components/WhoWeAreHeader.jsx
import React from "react";
import CarruselFotos from "@/Components/Fotos/CarruselFotos3";
export default function ExecutiveTeamHeader() {

  const members = [
  {
    public_id: "foto1",
    secure_url: "/images/DSC_6247.jpg",
    title: "Equipo Directivo",
    description: "Liderando con visión, compromiso y responsabilidad hacia un futuro sostenible",
  },
  {
    public_id: "foto2",
    secure_url: "/images/_DSC2310.jpg",
    title: "Liderazgo Estratégico",
    description: "Un equipo multidisciplinario enfocado en la toma de decisiones que generan impacto real",
  },
  {
    public_id: "foto3",
    secure_url: "/images/_DSC2313.jpg",
    title: "Trabajo Colaborativo",
    description: "La unión de experiencia, conocimiento y valores que impulsan nuestra organización",
  },
  {
    public_id: "foto4",
    secure_url: "/images/_DSC2321.jpg",
    title: "Compromiso ",
    description: "Profesionales alineados con la excelencia, la innovación y el desarrollo sostenible",
  },
  {
    public_id: "foto5",
    secure_url: "/images/DSC_6244.jpg",
    title: "Visión Compartida",
    description: "Decisiones responsables hoy para construir el futuro del mañana",
  },
];



    return (
        <div className="md:pt-8 bg-gradient-to-b bg-white">
            <CarruselFotos images={members} />
        </div>
    );
}

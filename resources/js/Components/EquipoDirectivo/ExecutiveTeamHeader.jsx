// components/WhoWeAreHeader.jsx
import React from "react";
import Header from "../Inicio/Header/Header";
import HeroSection from "../Quienes_Somos/HeroSection";
import TeamCardGrid from "./TeamCardGrid";

export default function ExecutiveTeamHeader() {
    const members = [
        {
            name: "Juan Pérez",
            role: "CEO",
            image: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761103016/samples/people/boy-snow-hoodie.jpg",
            description:
                "Encargado de liderar la estrategia global de la compañía.",
        },
        {
            name: "Ana Gómez",
            role: "CFO",
            image: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761103033/main-sample.png",
            description:
                "Responsable de la gestión financiera y planificación.",
        },
        {
            name: "Luis Ramírez",
            role: "CTO",
            image: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761103026/samples/look-up.jpg",
            description:
                "Supervisa la innovación tecnológica y desarrollo de productos.",
        },
        {
            name: "Diego fernando",
            role: "CEO",
            image: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761103025/samples/smile.jpg",
            description:
                "Encargado de liderar la estrategia global de la compañía.",
        },
        {
            name: "Jhoel Paredes",
            role: "CFO",
            image: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761103012/samples/animals/cat.jpg",
            description:
                "Responsable de la gestión financiera y planificación.",
        },
        {
            name: "rene solarez",
            role: "CTO",
            image: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761103029/samples/woman-on-a-football-field.jpg",
            description:
                "Supervisa la innovación tecnológica y desarrollo de productos.",
        },
    ];
    return (
        <div className="min-h-screen bg-gradient-to-b bg-white">
            <Header />

            <HeroSection
                className="text-gray-500 bg-teal-700"
                title="Equipo directivo"
                backgroundImage="https://res.cloudinary.com/dcyx3nqj5/image/upload/v1761103019/samples/landscapes/nature-mountains.jpg"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Equipo directivo" },
                ]}
                accentColor="bg-teal-300"
            />
            <div className="max-w-6xl mx-auto px-6">
                <TeamCardGrid members={members} />
            </div>
        </div>
    );
}

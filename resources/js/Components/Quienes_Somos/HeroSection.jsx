import React from "react";
import { motion } from "framer-motion";

export default function HeroSection({
    title = "Título por defecto",
    children,
    breadcrumb = [],
    backgroundImage = "",
    accentColor = "bg-teal-300",
}) {
    return (
        <div className="bg-teal-700 py-16 md:py-20 relative overflow-hidden">

            {/* Fondo con imagen */}
            {backgroundImage && (
                <div
                    className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${backgroundImage}")` }}
                ></div>
            )}

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Título principal animado */}
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                        initial={{ y: -50, opacity: 0 }} // empieza arriba y transparente
                        animate={{ y: 0, opacity: 1 }}   // termina en su posición con opacidad total
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {title}
                    </motion.h1>

                    {/* Breadcrumb para los href="/home"*/}
                    <div className="text-teal-100 text-sm md:text-base mb-4">
                        {breadcrumb.map((item, index) => (
                            <span key={index}>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="hover:text-white transition-colors duration-200"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <span className="text-white font-semibold">
                                        {item.label}
                                    </span>
                                )}
                                {index < breadcrumb.length - 1 && (
                                    <span className="mx-2">/</span>
                                )}
                            </span>
                        ))}
                    </div>

                    {/* Descripción breve */}
                    <p className="text-teal-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {children}
                    </p>
                </div>
            </div>
        </div>
    );
}

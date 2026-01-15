import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Resumen() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.4 },
        },
    };

    const item = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <section
            ref={ref}
            className="w-full min-h-[50vh] text-white py-16 px-6 md:px-20 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('https://res.cloudinary.com/dnbklbswg/image/upload/v1761087411/Operaciones_aqua_wqhiz1.jpg')`,
            }}
        >
            {/* Título */}
            <motion.h2
                variants={item}
                initial="hidden"
                animate={controls}
                className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg text-center"
            >
                OPERACIONES AQUA
            </motion.h2>

            <motion.a
                href="/" 
                rel="noopener noreferrer"
                variants={item}
                initial="hidden"
                animate={controls}
            >
                <motion.img
                    src="https://res.cloudinary.com/dnbklbswg/image/upload/v1761088081/Aqua_portada_sitio_web-removebg-preview_tbmwmk.png"
                    alt="Logo Aqua"
                    className="w-48 md:w-72 mb-8 cursor-pointer hover:scale-105 transition-transform duration-300"
                />
            </motion.a>
            {/* Datos */}
            <motion.div
                variants={container}
                initial="hidden"
                animate={controls}
                className="flex flex-col md:flex-row gap-10 md:gap-20 text-center bg-black/50 p-6 md:p-10 rounded-2xl backdrop-blur-sm"
            >
               
                <motion.div variants={item}>
                    <h3 className="text-2xl md:text-4xl font-bold">
                        <CountUp end={2412000} duration={4.5} separator="," /> M³
                    </h3>
                    <p className="font-semibold">Agua producida en lts.</p>
                    <p className="text-sm">Volumen tratado de agua</p>
                </motion.div>

               
                <motion.div variants={item}>
                    <h3 className="text-2xl md:text-4xl font-bold">
                        <CountUp end={2021760} duration={4.5} separator="," /> M³
                    </h3>
                    <p className="font-semibold">Metros cúbicos regenerados</p>
                    <p className="text-sm">Volumen tratado de agua residual</p>
                </motion.div>

                <motion.div variants={item}>
                    <h3 className="text-2xl md:text-4xl font-bold">
                        <CountUp end={64} duration={4.5} /> Empresas
                    </h3>
                    <p className="font-semibold">Clientes Satisfechos</p>
                    <p className="text-sm">Empresas que confían en Aqua</p>
                </motion.div>
            </motion.div>
        </section>
    );
}

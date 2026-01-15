import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import Header from "@/Components/Inicio/Header/Header";

export default function CapacitacionEntrenamiento() {
    return (
        <>
            <Head title="Capacitacion-AquaHealth" />
            <Header />
            <Banner title="Capacitacion y Entrenamiento" description="Conoce Quienes Somos"/>
            
            <Footer/>
            <ScrollToTopButton />
        </>
    );
}

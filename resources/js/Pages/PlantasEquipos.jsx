import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import Header from "@/Components/Inicio/Header/Header";

export default function PLantasEquipos() {
    return (
        <>
            <Head title="Plantas-AquaHealth" />
            <Header />
            <Banner title="Plantas y Equipos" description="Conoce Quienes Somos"/>
            
            <Footer/>
            <ScrollToTopButton />
        </>
    );
}

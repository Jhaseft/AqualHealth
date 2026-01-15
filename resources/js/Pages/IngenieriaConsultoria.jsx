import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import Header from "@/Components/Inicio/Header/Header";

export default function IngenieriaConsultoria() {
    return (
        <>
            <Head title="Ingenieria-AquaHealth" />
            <Header />
            <Banner title="Ingenieria y Consultoria" description="Conoce Quienes Somos"/>
            
            <Footer/>
            <ScrollToTopButton />
        </>
    );
}

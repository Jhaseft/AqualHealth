import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import Header from "@/Components/Inicio/Header/Header";

export default function ArmoQuimica() {
    return (
        <>
            <Head title="Armo Quimica-AquaHealth" />
            <Header />
            <Banner title="Armo Quimica" description="Conoce Quienes Somos"/>
            
            <Footer/>
            <ScrollToTopButton />
        </>
    );
}

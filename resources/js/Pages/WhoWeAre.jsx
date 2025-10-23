import { Head } from "@inertiajs/react";
import WhoWeAreHeader from "@/Components/Quienes_Somos/WhoWeAreHeader";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import Header from "@/Components/Inicio/Header/Header";

export default function WhoWeAre() {
    return (
        <>
            <Head title="Quiénes Somos-AquaHealth" />
            <Header />
            <Banner title="Quiénes Somos" description="Conoce Quienes Somos"/>
            <WhoWeAreHeader />
            <Footer/>
            <ScrollToTopButton />
        </>
    );
}

import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import Header from "@/Components/Inicio/Header/Header";

export default function ProductosQuimicos() {
    return (
        <>
            <Head title="Productos-AquaHealth" />
            <Header />
            <Banner title="Productos Quimicos" description="Conoce Quienes Somos"/>
            
            <Footer/>
            <ScrollToTopButton />
        </>
    );
}

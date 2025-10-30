import Header from "@/Components/Inicio/Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import Politicas from "@/Components/Politicas/Politicas";

export default function Politicass() {
    return (
        <>
            <Head title="Politicas-AquaHealth" />
            <Header />
            <Banner
                title="Nuestras Políticas"
                description="Comprometidos con la calidad, la legalidad, la sostenibilidad y la satisfacción de nuestros clientes en todos nuestros proyectos."
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Políticas" },
                ]}
                imageUrl="https://res.cloudinary.com/dnbklbswg/image/upload/v1761087411/Operaciones_aqua_wqhiz1.jpg"
            />
            <Politicas />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

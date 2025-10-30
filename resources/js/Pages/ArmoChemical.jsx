import Header from "@/Components/Inicio/Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import ArmoChemicalPrincipal from "@/Components/ArmoQuimica/ArmoChemicalPrincipal";

export default function ArmoChemical() {
    return (
        <>
            <Head title="Armo-Quimica" />
            <Header />
            <Banner
                title="Armo química"
                description="Armo Química, donde la ciencia y la sostenibilidad se encuentran."
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Armo-Quimica" },
                ]}
                imageUrl="https://res.cloudinary.com/dnbklbswg/image/upload/v1761087411/Operaciones_aqua_wqhiz1.jpg"
            />
            <ArmoChemicalPrincipal/>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

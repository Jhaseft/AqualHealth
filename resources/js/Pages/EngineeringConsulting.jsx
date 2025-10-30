import Header from "@/Components/Inicio/Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import EngineeringConsultingPrincipal from "@/Components/IngenieriaConsultoria/EngineeringConsultingPrincipal";

export default function EngineeringConsulting() {
    return (
        <>
            <Head title="Ingenieria y consultoria" />
            <Header />
            <Banner
                title="Ingeniería & Consultoría"
                description="Armo Química, donde la ciencia y la sostenibilidad se encuentran."
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Ingeniería & Consultoría" },
                ]}
                imageUrl="https://res.cloudinary.com/dnbklbswg/image/upload/v1761087411/Operaciones_aqua_wqhiz1.jpg"
            />
            <EngineeringConsultingPrincipal/>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

import Header from "@/Components/Inicio/Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import TrainingDevelopmentPrincipal from "@/Components/CapacitacionEntrenamiento/TrainingDevelopmentPrincipal";

export default function TrainingDevelopment() {
    return (
        <>
            <Head title="Armo-Quimica" />
            <Header />
            <Banner
                title="Capacitacion y Entrenamiento"
                description="Armo Química, donde la ciencia y la sostenibilidad se encuentran."
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Capacitatacion & Entrenamiento" },
                ]}
                imageUrl="https://res.cloudinary.com/dnbklbswg/image/upload/v1761087411/Operaciones_aqua_wqhiz1.jpg"
            />
            <TrainingDevelopmentPrincipal/>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

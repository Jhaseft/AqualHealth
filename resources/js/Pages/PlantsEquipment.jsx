import Header from "@/Components/Inicio/Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import PlantsEquipmentPrincipal from "@/Components/PlantasEquipos/PlantsEquipmentPrincipal";

export default function PlantsEquipment() {
    return (
        <>
            <Head title="Plantas y Equipos" />
            <Header />
            <Banner
                title="Plantas & Equipos"
                description="Armo Química, donde la ciencia y la sostenibilidad se encuentran."
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Plantas & Equipos" },
                ]}
                imageUrl="https://res.cloudinary.com/dnbklbswg/image/upload/v1761087411/Operaciones_aqua_wqhiz1.jpg"
            />
            <PlantsEquipmentPrincipal/>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

import { Head } from "@inertiajs/react";
import ExecutiveTeamHeader from "@/Components/EquipoDirectivo/ExecutiveTeamHeader";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Header from "@/Components/Inicio/Header/Header";
import Banner from "@/Components/Banner";

export default function ExecutiveTeam() {
    return (
        <>
            <Head title="Equipo directivo-AquaHealth" />
            <Header />
            <Banner
                title="Equipo Directivo"
                description="Conoce a Nuestro Personal"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Equipo-Directivo" },
                ]}
                imageUrl="https://res.cloudinary.com/dnbklbswg/image/upload/v1761087411/Operaciones_aqua_wqhiz1.jpg"
            />
            <ExecutiveTeamHeader/>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

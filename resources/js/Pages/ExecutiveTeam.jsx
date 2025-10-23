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
            <Banner title="Equipo Directivo" description="Conoce a Nuestro Personal"/>
            <ExecutiveTeamHeader />
            <Footer/>
            <ScrollToTopButton />
        </>
    );
}

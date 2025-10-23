import Header from "@/Components/Inicio/Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import Politicas from "@/Components/Politicas/Politicas";

export default function Politicass() {
  

  return (
   <>
      <Head title="Politicas-AquaHealth"/>
      <Header />
      <Banner title="Nuestras Políticas" description="Comprometidos con la calidad, la legalidad, la sostenibilidad y la
          satisfacción de nuestros clientes en todos nuestros proyectos."/>
      <Politicas/>
      <Footer  />
      <ScrollToTopButton />
    </>
  );
}

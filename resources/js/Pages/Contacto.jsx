import Header from "@/Components/Inicio/Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import ContactoContent from "@/Components/Contacto/ContactoContent";

export default function Contacto() {
  return (
    <>
      <Head title="Contacto - AquaHealth"/>
      <Header />
      <ContactoContent />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
import Header from "@/Components/Inicio/Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import Banner from "@/Components/Banner";
import Linea from "@/Components/Historia/Linea";

export default function Historia() {
  

  return (
   <>
      <Head title="Historias-AquaHealth"/>
      <Header /> 
      <Banner title="Nuestra Historia" description="Conoce la Historia de AquaHealth"/>
      <Linea/>
      <Footer  />
      
    </>
  );
}

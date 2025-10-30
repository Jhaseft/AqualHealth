import Header from "@/Components/Inicio/Header/Header";
import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import ScrollToTopButton from "@/Layouts/ScrollToTopButton";
import Banner from "@/Components/Banner";
import ProductsChemicalsPrincipal from "@/Components/ProductosQuimicos/ProductsChemicalsPrincipal";

export default function ProductsChemicals() {
    return (
        <>
            <Head title="Productos quimicos" />
            <Header />
            <Banner
                title="Productos Químicos"
                description="Armo Química, donde la ciencia y la sostenibilidad se encuentran."
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Productos Químicos" },
                ]}
                imageUrl="https://res.cloudinary.com/dnbklbswg/image/upload/v1761087411/Operaciones_aqua_wqhiz1.jpg"
            />
            <ProductsChemicalsPrincipal/>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

import CarruselFotos from "@/Components/CarruselFotos";
import InicioLayout from "@/Layouts/Inicio/InicioLayout";
import Header from "@/Layouts/Inicio/Header"; 
export default function Welcome() {
  const demoImages = [
    {
      public_id: "foto1",
      secure_url: "https://picsum.photos/id/1018/1920/1080",
      caption: "",
    },
    {
      public_id: "foto2",
      secure_url: "https://picsum.photos/id/1015/1920/1080",
      caption: "",
    },
    {
      public_id: "foto3",
      secure_url: "https://picsum.photos/id/1025/1920/1080",
      caption: "",
    },
  ];

  return (
    <InicioLayout>
      <Header />
      <CarruselFotos images={demoImages} />
    </InicioLayout>
  );
}

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Detectar cuando el usuario baja
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { // distancia desde el top para mostrar el botón
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll suave al top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full  shadow-lg bg-blue-600 text-white transition-transform duration-300 
                  hover:bg-blue-700 ${visible ? "scale-100" : "scale-0"}`}
      aria-label="Subir al inicio"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}

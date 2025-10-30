// Footer.jsx
export default function Footer() {
  const contacto = {
    direccion: "Av. Agua Limpia #123, La Paz, Bolivia",
    telefono: "+591 70000000",
    email: "info@aquahealth.com",
  };

  const enlaces = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "#" },
    { label: "Casos de éxito", href: "/CasosDeExito" },
    { label: "Contacto", href: "#" },
  ];

  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-16 flex flex-col md:flex-row justify-between gap-8">
        {/* Información de contacto */}
        <div>
          <h4 className="text-lg font-bold mb-3">Contáctanos</h4>
          <p>{contacto?.direccion}</p>
          <p>{contacto?.telefono}</p>
          <p>{contacto?.email}</p>
        </div>

        {/* Enlaces rápidos */}
        {enlaces && enlaces.length > 0 && (
          <div>
            <h4 className="text-lg font-bold mb-3">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {enlaces.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-blue-300 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Derechos de autor */}
      <div className="bg-gray-900 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} AquaHealth. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default function Resumen() {
  return (
    <>
      <section className="w-full bg-white md:py-20 py-14 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center xl:gap-36 gap-10">
          
          {/* Texto */}
          <div className="w-full xl:w-1/2 text-gray-800 order-1">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-left 
                           bg-gradient-to-r from-gray-900 via-blue-600 to-blue-300
                           bg-clip-text text-transparent
                           transition-all duration-500 hover:from-blue-800 hover:via-blue-400 hover:to-blue-200 hover:animate-pulse">
              Soluciones integrales en gestión y tratamiento de agua a nivel nacional
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              <strong className="font-semibold text-blue-600 hover:text-blue-400 transition-colors duration-500">
                AquaHealth
              </strong> es una empresa boliviana especializada en la gestión 
              y tratamiento integral del agua, conformada por un equipo profesional altamente 
              capacitado, con la tecnología y el equipamiento necesarios para ofrecer servicios 
              eficientes, sostenibles y de calidad a los sectores público y privado.
            </p>
            <p className="text-base font-bold md:text-lg leading-relaxed text-justify mt-4">
              Fundada en 2020, la empresa ha desarrollado cinco líneas de negocio que le permiten 
              ejecutar proyectos de impacto nacional, consolidándose como un referente en soluciones 
              ambientales y de ingeniería del agua en todo el país.
            </p>
          </div>

          {/* Imagen tipo banner con hover */}
          <div className="w-full xl:w-3/5 order-2 group relative">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl aspect-[16/9]">
              {/* Imagen principal */}
              <img
                src="https://res.cloudinary.com/dnbklbswg/image/upload/v1761085937/Vision_aqua_fu8c9v.jpg"
                alt="AquaHealth - gestión y tratamiento de agua"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay de hover */}
              <div className="absolute inset-0 bg-blue-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-center p-6">
                <p className="text-white text-lg md:text-2xl font-bold">
                  Innovación y tecnología para el tratamiento de agua en Bolivia
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

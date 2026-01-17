export default function LineaDeNegocioCard({ titulo, imagen, servicios, imagenfondo, bg }) {
  // Determinar si usar grid (cuando hay más de 8 servicios)
  const useGrid = servicios.length > 8;

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6 md:mb-8 h-auto items-center">

      <div className="w-full md:w-60 lg:w-80 flex-shrink-0 p-2 md:p-3">
        <div
          className="rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
          style={{
            background: `linear-gradient(to right, ${bg.from}, ${bg.to})`,
          }}
        >
          <div className="w-full h-48 sm:h-56 md:h-full rounded-3xl bg-transparent overflow-hidden">
            <img
              src={imagen}
              alt={titulo}
              className="w-full h-full object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>


      <div
        className="relative flex-1 rounded-lg shadow-lg p-4 sm:p-5 md:p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col overflow-hidden"
        style={{ backgroundImage: `linear-gradient(to right, ${bg.from}, ${bg.to})` }}
      >


        <div className="hidden lg:block absolute -right-24 xl:-right-40 top-0 bottom-0 w-60 xl:w-80 z-10">
          <div className="w-full h-full">
            <div className="w-full h-full rounded-full overflow-hidden border-4 xl:border-[7px] border-white">
              <img
                src={imagenfondo}
                alt={`${titulo} - fondo`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>


        <div className="lg:hidden flex justify-center mb-4 -mt-2">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={imagenfondo}
              alt={`${titulo} - fondo`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>


        <div className="lg:pr-20 xl:pr-28">
          <h3 className="text-white font-extrabold text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-2 md:mb-3 tracking-wide uppercase">
            {titulo}
          </h3>

          <div className={
            useGrid
              ? "grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-0.5 sm:gap-y-1 md:gap-y-0.5 flex-1"
              : "space-y-0.5 sm:space-y-1 md:space-y-0.5 flex-1"
          }>
            {servicios.map((servicio, index) => (
              <p
                key={index}
                className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl leading-snug"
                style={{
                  animation: `fadeIn 0.5s ease-in ${index * 0.1}s both`
                }}
              >
                {servicio}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
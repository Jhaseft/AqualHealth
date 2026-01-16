import LineaDeNegocioCard from "./LineaDeNegocioCard";
 
export default function AquaHealthLineasNegocio({lineasDeNegocio}) {
  

  return (
    <div className=" bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          {lineasDeNegocio.map((linea, index) => (
            <div
              key={index}
              style={{
                animation: `slideDown 0.6s ease-out ${0.2 + index * 0.2}s both`
              }}
            >
              <LineaDeNegocioCard
                titulo={linea.titulo}
                imagen={linea.imagen}
                servicios={linea.servicios}
                imagenfondo={linea.imagenfondo}
                bg={linea.bg}
              />
            </div>
          ))}
        </div>
        

        
      </div>
    </div>
  );
}
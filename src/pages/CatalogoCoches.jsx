import Tarjeta from "../components/Tarjeta.jsx";
import ContenedorGlobal from "../components/ContenedorGlobal.jsx";
import coches from "../data/coches.js";

function CatalogoCoches() {
    return (
        <>
            <ContenedorGlobal titulo="Nuestros Vehículos" subtitulo="Prestigio, Calidad y Estetica">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
                    {coches.map((coche, index) => (
                        <Tarjeta
                            key={index}
                            nombre={coche.nombre}
                            foto={coche.imagen}
                            descripcion={coche.descripcion}
                            precio={coche.precio}
                            to={`/coches/${index}`}
                        >
                        </Tarjeta>
                    )
                    )}
                </section>
            </ContenedorGlobal>
        </>
    );
}

export default CatalogoCoches;
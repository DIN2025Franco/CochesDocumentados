import VehiculoForm from "../components/VehiculoForm";
import ContenedorGlobal from "../components/ContenedorGlobal";

function Admin() {
  return (
    <section className="flex flex-col md:flex-row w-full">
      <ContenedorGlobal titulo="Vender un Vehículo" subtitulo="Prestigio, Calidad y Estetica">
        <VehiculoForm></VehiculoForm>
      </ContenedorGlobal>

      <img src="src/assets/img/car.png" alt="Silueta de coche" className="hidden lg:block object-cover max-w-200 overflow-hidden" />

    </section>

  );
}
export default Admin;

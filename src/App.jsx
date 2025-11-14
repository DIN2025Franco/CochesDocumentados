import GlobalContent from './GlobalContent.jsx'
import TarjetaCoche from './TarjetaCoche.jsx'
import coches from './data/coches.js'
import './index.css'

function App() {
  return (
    <>
      <GlobalContent titulo="Nuestros Vehículos" subtitulo="Prestigio, Calidad y Estetica">
      {coches.map((coche, index) =>(
          <TarjetaCoche
            key={index}
            nombre={coche.nombre}
            foto={coche.imagen}
            descripcion={coche.descripcion}
            precio={coche.precio}
          >
          </TarjetaCoche>
        )
      )}
    </GlobalContent>
    </>
  )
}

export default App

function TarjetaCoche(props) {
    const { nombre, foto, descripcion, precio } = props;
    return (
        <>
            <article
                tabIndex="0"
                aria-label={`${nombre}`}
                className="flex flex-col items-start gap-3 p-5 rounded-lg bg-[#111]">

                <figure className="w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
                    <img className="w-full h-full object-cover" src={foto} alt={nombre}></img>
                    <figcaption className="sr-only">{props.children}</figcaption>
                </figure>

                <header>
                    <h2 className="text-[#d4af37] text-2xl font-bold"><strong>{nombre}</strong></h2>
                </header>
                
                <section>
                    <article>
                    <p className="text-white text-left">{descripcion}</p>
                    <p className="text-[#d4af37] text-left font-bold">{precio}</p>
                    </article>
                </section>

            </article>
        </>
    )
}

export default TarjetaCoche
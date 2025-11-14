function GlobalContent({ children, titulo, subtitulo }) {

  return (
    <>
      <main
        id="main-content"
        role="main"
        tabIndex="-1"
        className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8 px-4 sm:px-8 py-8"
      >

        <section className="w-full column">
          <h1 className="text-[#d4af37] max-w-[800px] font-bold text-6xl py-4 bg-[#111] block [clip-path:polygon(0%_0%,95%_0%,100%_100%,0%_100%)]">{titulo}</h1>
          <h2 className="text-2xl mt-2">{subtitulo}</h2>
        </section>

        <section aria-labelledby="main-section-title" className="text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-8">
          {children}
        </section>
      </main>
    </>
  )
}

export default GlobalContent

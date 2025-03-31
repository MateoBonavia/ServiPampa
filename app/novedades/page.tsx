export default function NovedadesPage() {
  return (
    <div className="text-white mt-6 md:pr-8 md:pl-8 lg:pr-24 lg:pl-24 animate-spin-slow">
      {/* Promociones */}
      <div>
        <h2>Nuestras promociones</h2>
        {/* Carousel */}
        <div className="w-full border h-[8rem] overflow-hidden animation-autoRun">
          {/* First item */}
          <div></div>
          {/* Second item */}
          <div></div>
          {/* Third item */}
          <div></div>
          {/* Fourth item */}
          <div></div>
        </div>
        <p>
          Entérate de las últimas novedades y actualizaciones de ServiPampa.
        </p>
      </div>
      {/* Noticias */}
      <div>
        <h3>Noticias</h3>
      </div>
    </div>
  );
}

import Maps from '@/components/maps';

export default function ContactoPage() {
  const locationMorrison = {
    lat: -32.58491647271772,
    lng: -62.82959248843925,
  };

  const locationEscalante = {
    lat: -33.175498032841745,
    lng: -62.779081365295546,
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="mt-8">
        <Maps />
      </div>

      {/* Contact form */}
      <div>
        <div>
          <h2 className="text-2xl font-bold text-center">Contacto</h2>
          <p>
            Completa tus datos y dejanos tu mensaje. Te respondemos lo antes
            posible!
          </p>
        </div>
        <form className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Nombre"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 rounded"
          />
          <textarea
            placeholder="Mensaje"
            className="border border-gray-300 p-2 rounded h-32"
          ></textarea>
          <button className="bg-blue-500 text-white p-2 rounded">Enviar</button>
        </form>
      </div>

      {/* Contact data */}
      <div>
        <div>
          <h3>Morrison</h3>
          <div></div>
        </div>

        <div>
          <h3>Escalante</h3>
          <div></div>
        </div>
      </div>
    </div>
  );
}

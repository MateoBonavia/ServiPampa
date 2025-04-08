import Maps from '@/components/maps';
import Image from 'next/image';
import phone from '@/assets/svg/Contact/phone.svg';
import whatsapp from '@/assets/svg/Contact/whatsapp.svg';
import facebook from '@/assets/svg/Contact/facebook.svg';
import instagram from '@/assets/svg/Contact/instagram.svg';
import location from '@/assets/svg/Contact/location-dot.svg';
import clock from '@/assets/svg/Contact/clock.svg';

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
    <div className="flex flex-col gap-8">
      <div className="mt-8">
        <Maps />
      </div>

      {/* Contact form */}
      <div className="bg-[#ACACC4] rounded-lg p-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Contacto</h2>
          <p>
            Completa tus datos y dejanos tu mensaje. Te respondemos lo antes
            posible!
          </p>
        </div>
        <form className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Nombre"
            className="border border-[#000] p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-[#000] p-2 rounded"
          />
          <textarea
            placeholder="Mensaje"
            className="border border-[#000] p-2 rounded h-32"
          ></textarea>
          <div className="flex justify-end">
            <button className="bg-[#00001C] text-white p-2 rounded w-30">
              Enviar
            </button>
          </div>
        </form>
      </div>

      {/* Contact data */}
      <div className="bg-[#ACACC4] rounded-lg p-2 flex flex-col gap-10 mb-4">
        {/* Morrison and Escalante data */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Morrison</h3>
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <div className="flex gap-2 items-center">
                <Image src={phone} alt="teléfono" className="w-6" />
                <p>3537592323</p>
              </div>
              {/* WhatsApp */}
              <div className="flex gap-2 items-center">
                <Image src={whatsapp} alt="WhatsApp" className="w-6" />
                <p>3537592323</p>
              </div>
              {/* Facebook */}
              <div className="flex gap-2 items-center">
                <Image src={facebook} alt="Facebook" className="w-6" />
                <p>Servipampa</p>
              </div>
              {/* Instagram */}
              <div className="flex gap-2 items-center">
                <Image src={instagram} alt="Instagram" className="w-6" />
                <p>Servipampa</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Escalante</h3>
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <div className="flex gap-2 items-center">
                <Image src={phone} alt="teléfono" className="w-6" />
                <p>3533439336</p>
              </div>
              {/* WhatsApp */}
              <div className="flex gap-2 items-center">
                <Image src={whatsapp} alt="WhatsApp" className="w-6" />
                <p>3533439336</p>
              </div>
              {/* Facebook */}
              <div className="flex gap-2 items-center">
                <Image src={facebook} alt="Facebook" className="w-6" />
                <p>Servipampa</p>
              </div>
              {/* Instagram */}
              <div className="flex gap-2 items-center">
                <Image src={instagram} alt="Instagram" className="w-6" />
                <p>Servipampa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location and time */}
        <div className="flex flex-col gap-8">
          {/* Morrison */}
          <div className="flex flex-col gap-3">
            {/* Location */}
            <div className="flex items-center gap-2">
              <Image src={location} alt="Ubicación" className="w-6" />
              <p>Ruta Nac. 9 KM 515 - Morrison, Cordoba</p>
            </div>
            {/* Time */}
            <div className="flex items-center gap-2">
              <Image src={clock} alt="Horario" className="w-6" />
              <p>
                Lunes a Sábados - 07:00 a 22:00 <br /> Domingos - 09:00 a 13:00
                y 17:00 a 21:00
              </p>
            </div>
          </div>

          {/* Escalante */}
          <div className="flex flex-col gap-3">
            {/* Location */}
            <div className="flex items-center gap-2">
              <Image src={location} alt="Ubicación" className="w-6" />
              <p>Ruta Prov. 3 Y 11 - W. Escalante, Cordoba</p>
            </div>
            {/* Time */}
            <div className="flex items-center gap-2">
              <Image src={clock} alt="Horario" className="w-6" />
              <p>
                Lunes a Sábados - 07:00 a 22:00 <br /> Domingos - 09:00 a 13:00
                y 17:00 a 21:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

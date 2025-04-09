import Maps from '@/components/maps';
import Image from 'next/image';
import phone from '@/assets/svg/Contact/phone.svg';
import whatsapp from '@/assets/svg/Contact/whatsapp.svg';
import facebook from '@/assets/svg/Contact/facebook.svg';
import instagram from '@/assets/svg/Contact/instagram.svg';
import location from '@/assets/svg/Contact/location-dot.svg';
import clock from '@/assets/svg/Contact/clock.svg';
import ContactForm from '@/components/contactForm';

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
    <div className="flex flex-col gap-8 md:pr-8 md:pl-8 lg:pr-24 lg:pl-24 lg:mt-12">
      <div className="flex flex-col gap-8 lg:flex-row-reverse lg:justify-between">
        <div className="mt-8 lg:mt-0">
          <Maps />
        </div>
        {/* Contact form */}
        <ContactForm />
      </div>

      {/* Contact data */}
      <div className="bg-[#ACACC4] rounded-lg p-2 flex flex-col gap-10 mb-4 md:mx-16 md:px-8 md:py-4 lg:w-full lg:mx-0 lg:flex-row justify-between lg:px-30">
        {/* Morrison and Escalante data */}
        <div className="flex justify-between md:justify-around lg:gap-18">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold md:text-2xl">Morrison</h3>
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
            <h3 className="text-xl font-semibold md:text-2xl">Escalante</h3>
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
        <div className="flex flex-col items-center gap-8">
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

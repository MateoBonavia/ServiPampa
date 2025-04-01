import Combustibles from '@/assets/images/Servicios/Combustibles 1.png';
import Shop from '@/assets/images/Servicios/Shop 1.png';
import ServicesCard from '@/components/servicesCard';
import { title } from 'process';

export default function ServiciosPage() {
  const firstCard = {
    title: 'Combustibles Disponibles',
    description:
      'En ServiPampa te ofrecemos Nafta Súper, Nafta Premium, Diesel y Diesel Premium.',
    image: Combustibles,
  };

  const secondCard = {
    title: 'Shop & Cafeteria',
    description:
      'Desde snacks y bebidas hasta productos esenciales para el camino. Disfruté de un café recién hecho o una comida rápida para continuar tu viaje con energía.',
    image: Shop,
  };

  const cards = [firstCard, secondCard];

  return (
    <div className="flex flex-col gap-6 text-white mt-6 md:pr-8 md:pl-8 lg:pr-24 lg:pl-24">
      {/* Top part */}
      <div className="">
        <h2 className="text-xl font-semibold mb-2">Nuestros Servicios</h2>
        <p className="text-sm">
          En SERVIPAMPA, estamos para acompañarte en cada viaje, con un servicio
          confiable y cercano. Ofrecemos combustibles de calidad y espacios
          pensados para tu comodidad.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-6">
        {cards.map((e, index) => (
          <ServicesCard
            title={e.title}
            description={e.description}
            image={e.image}
            reverse={index !== 0} // Corrige la lógica para la propiedad reverse
            key={e.title} // Use una clave única para cada tarjeta
          />
        ))}
      </div>

      {/* Final text */}
      <p className="text-sm text-justify mb-4 lg:text-base">
        Ademas contamos con duchas y un amplio estacionamiento. Porque más que
        una estación de servicio, somos un punto de encuentro en la localidad.
        Te esperamos en SERVIPAMPA, donde cada carga es con atención
        personalizada. 🚀
      </p>
    </div>
  );
}

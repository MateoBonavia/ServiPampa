import Image from 'next/image';
import First from '../../assets/images/Historia/1.png';
import Second from '../../assets/images/Historia/2.png';

export default function HistoriaPage() {
  return (
    <div className=" text-white flex flex-col mt-6 md:pr-8 md:pl-8 lg:pr-48 lg:pl-48">
      <h2 className="text-3xl font-bold">Nuestra Historia</h2>
      {/* First text */}
      <div className="flex flex-col items-center lg:flex lg:flex-row lg:gap-2">
        <div className="bg-[#7C7CA4] rounded-sm px-0.5 py-2 text-sm mt-4 text-justify md:p-4 lg:rounded-none lg:rounded-br-xl">
          <p className="lg:p-6 lg:text-base">
            SERVIPAMPA nació con un propósito claro: brindar un servicio clave
            para el progreso de nuestras localidades, acercando a la comunidad
            una estación de servicio confiable, moderna y con atención cercana.
            La primera estación, SERVIPAMPA Morrison, abrió sus puertas el 19 de
            enero de 2009, fundada por Walter y Javier, convirtiéndose en un
            punto de referencia para la localidad. Más adelante, el 15 de agosto
            de 2015, se sumó SERVIPAMPA Escalante, de la mano de Jorge y Javier,
            reafirmando nuestro compromiso con el crecimiento de la región.
          </p>
        </div>
        <Image
          src={First}
          alt="Historia-1"
          className="w-112 md:w-140 lg:w-max"
        />
      </div>
      {/* Second text */}
      <div className="flex flex-col items-center lg:flex lg:flex-row-reverse lg:gap-2">
        <div className="bg-[#7C7CA4] rounded-sm px-0.5 py-2 text-sm mt-2 text-justify md:p-4 lg:rounded-none lg:rounded-tl-xl">
          <p className="lg:p-6 lg:text-base">
            Desde el primer día, nos enfocamos en escuchar a nuestros clientes y
            mejorar continuamente. El camino no siempre fue fácil, sorteamos
            desafíos y tomamos decisiones difíciles, pero siempre con la
            convicción de que la cercanía y la calidad del servicio marcan la
            diferencia. A lo largo de los años, hemos realizado importantes
            inversiones, sobre todo en Morrison, donde renovamos por completo
            los pisos, cañerías, depósitos y construimos nuevos baños y
            galpones. Además, en ambas estaciones modernizamos los surtidores
            para ofrecer siempre un servicio eficiente y actualizado.
          </p>
        </div>
        <Image
          src={Second}
          alt="Historia-2"
          className="w-112 md:w-140 lg:w-max"
        />
      </div>
      {/* Third text */}
      <div className="bg-[#7C7CA4] rounded-sm px-0.5 py-2 text-sm mt-8 text-justify md:p-4 lg:px-4 lg:rounded-none lg:rounded-tr-lg lg:rounded-bl-lg">
        <p className="lg:text-base">
          Hoy, SERVIPAMPA es más que una estación de servicio. Somos una empresa
          local con valores sólidos:
        </p>
        <ul>
          <li>✅ Confianza en cada carga.</li>
          <li>✅ Mejora continua para ofrecer lo mejor.</li>
          <li>✅Transparencia en nuestro trabajo y relaciones.</li>
        </ul>
      </div>
      {/* Final */}
      <h3 className="text-2xl mt-6 lg:text-base">Mirando hacia el futuro 🚀</h3>
      <div className="px-0.5 py-2 text-sm mt-2 mb-4 text-justify lg:text-base">
        <p>
          Nuestro objetivo es seguir representando a las pequeñas localidades,
          donde las grandes empresas no suelen invertir, y expandir la marca
          SERVIPAMPA a nuevas comunidades. También seguimos trabajando en
          mejoras: playas más amplias, mejor iluminación, modernización del shop
          y estacionamientos más cómodos. Cada paso que damos es con la misma
          esencia con la que comenzamos: estar cerca de nuestros clientes y ser
          un punto de encuentro en cada viaje. ¡Gracias por acompañarnos en este
          camino!
        </p>
      </div>
    </div>
  );
}

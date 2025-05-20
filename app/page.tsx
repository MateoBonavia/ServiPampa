import Image from 'next/image';
import Banner from '../assets/images/Banner.png';
import Logo from '../assets/Logo/Logo.png';
import gas from '../assets/svg/Home/gas.svg';
import oil from '../assets/svg/Home/oil.svg';
import shop from '../assets/svg/Home/shop.svg';

const bannerUrl = process.env.NEXT_PUBLIC_BANNER_URL!;

export default function Home() {
  return (
    <div className="mt-6 md:pr-8 md:pl-8 lg:pr-24 lg:pl-24">
      {/* Top part */}
      <div className="flex flex-col relative items-center justify-center h-48 overflow-hidden md:h-80 lg:h-[35rem]">
        <div className="flex flex-col justify-center items-center gap-4 absolute text-2xl z-10 font-bold text-white md:gap-12 lg:gap-8 lg:top-1/3 lg:w-[80%]">
          <h1 className="flex items-center gap-2 text-3xl md:text-5xl lg:text-6xl text-center">
            ServiPampa{' '}
            <Image
              src={Logo}
              alt="Logo"
              className="md:h-15 md:w-15 lg:h-20 lg:w-20"
            />
          </h1>

          <p className="w-65 text-xl md:text-3xl md:w-160 lg:text-4xl text-center">
            Tu estación de confianza en el camino
          </p>
        </div>
        <div className="bg-gray-900 opacity-75 h-full w-full rounded-md">
          <Image
            src={bannerUrl}
            alt="Banner"
            fill
            unoptimized
            className="relative h-full w-full object-cover rounded-md"
            priority
          />
        </div>
      </div>

      {/* Bottom part */}
      <div className="mt-10">
        {/* First box */}
        <div className="bg-[#090949] h-20 flex justify-center items-center rounded-md md:h-30">
          <h3 className="w-[100%] text-white text-center md:text-2xl md:pl-12 md:pr-12">
            ¡Te esperamos en SERVIPAMPA para que disfrutes de nuestros
            servicios!
          </h3>
        </div>

        {/* Boxes of services */}
        <div className="flex flex-wrap w-[100%]">
          {/* Second box */}
          <div className="bg-[#7C7CA4] h-20 w-full flex justify-center items-center rounded-md shrink lg:w-1/3">
            <h4 className="flex gap-2 justify-center w-[100%] text-white text-center text-2xl md:pl-12 md:pr-12">
              Combustibles
              <Image src={gas} alt="Combustibles" width={25} />
            </h4>
          </div>

          {/* Third box */}
          <div className="bg-[#9090AF] h-20 w-full flex justify-center items-center rounded-md shrink lg:w-1/3">
            <h4 className="flex gap-2 justify-center w-[100%] text-white text-center text-2xl md:pl-12 md:pr-12">
              Lubricantes
              <Image src={oil} alt="Lubricantes" width={20} />
            </h4>
          </div>

          {/* Fourth box */}
          <div className="bg-[#7C7CA4] h-20 w-full flex justify-center items-center rounded-md shrink lg:w-1/3">
            <h4 className="flex gap-2 justify-center w-[100%] text-white text-center text-2xl md:pl-12 md:pr-12">
              Shop
              <Image src={shop} alt="Shop" width={30} />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

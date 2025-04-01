'use client';

import useEmblaCarousel from 'embla-carousel-react';
import firstPromo from '@/assets/images/Promociones/Promocion1.png';
import secondPromo from '@/assets/images/Promociones/Promocion2.png';
import thirdPromo from '@/assets/images/Promociones/Promocion3.png';
import fourthPromo from '@/assets/images/Promociones/Promocion4.png';
import Noticia from '@/assets/images/Promociones/Noticias 1.png';
import Image from 'next/image';
import { useCallback } from 'react';

export default function NovedadesPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col gap-12 text-white mt-6 md:pr-8 md:pl-8 lg:pr-24 lg:pl-24">
      {/* Promociones */}
      <div>
        <h2 className="mb-4 text-2xl font-bold lg:text-4xl">
          Nuestras promociones
        </h2>
        {/* Carrusel en mobile, grid en desktop */}
        <div className="relative md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              <div className="flex-[0_0_calc(80%)] min-w-0">
                <Image src={firstPromo} alt="First promo" />
              </div>
              <div className="flex-[0_0_calc(80%)] min-w-0">
                <Image src={secondPromo} alt="Second promo" />
              </div>
              <div className="flex-[0_0_calc(80%)] min-w-0">
                <Image src={thirdPromo} alt="Third promo" />
              </div>
              <div className="flex-[0_0_calc(80%)] min-w-0">
                <Image src={fourthPromo} alt="Fourth promo" />
              </div>
            </div>
          </div>
          {/* Botones */}
          <div className="flex justify-start pl-4 gap-4 mt-4">
            <button
              className="bg-gray-800 text-white p-2 rounded-[50%] w-10"
              onClick={scrollPrev}
            >
              {'<'}
            </button>
            <button
              className="bg-gray-800 text-white p-2 rounded-[50%] w-10"
              onClick={scrollNext}
            >
              {'>'}
            </button>
          </div>
        </div>
        {/* Grid en desktop */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-2 lg:gap-4 lg:w-full">
          <div className="w-full">
            <Image src={firstPromo} alt="First promo" className="w-full" />
          </div>
          <div className="w-full">
            <Image src={secondPromo} alt="Second promo" className="w-full" />
          </div>
          <div className="w-full">
            <Image src={thirdPromo} alt="Third promo" className="w-full" />
          </div>
          <div className="w-full">
            <Image src={fourthPromo} alt="Fourth promo" className="w-full" />
          </div>
        </div>
      </div>
      {/* Noticias */}
      <div className="mb-10">
        <h3 className="mb-2 text-2xl font-bold lg:text-4xl">Noticias</h3>
        <Image src={Noticia} alt="Noticia" className="lg:w-[100%]" />
      </div>
    </div>
  );
}

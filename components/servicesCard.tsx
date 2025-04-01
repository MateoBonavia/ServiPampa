import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

interface cardProps {
  title: string;
  description: string;
  image: StaticImageData;
  reverse?: boolean; // Nueva propiedad opcional
}

const ServicesCard = ({ title, description, image, reverse }: cardProps) => {
  return (
    <div
      className={`bg-[#7C7CA4] rounded-lg lg:flex ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <Image
        src={image}
        alt={title}
        className={`rounded-tl-lg rounded-tr-lg lg:w-[90%] ${
          reverse
            ? 'lg:rounded-tl-none lg:rounded-br-lg'
            : 'lg:rounded-tr-none lg:rounded-bl-lg'
        }`}
      />
      <div className="px-2 py-4 flex flex-col lg:justify-center lg:gap-4">
        <h4 className="text-lg lg:text-2xl lg:font-bold">{title}</h4>
        <p className="text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;

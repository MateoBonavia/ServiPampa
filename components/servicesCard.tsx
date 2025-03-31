import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

interface cardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const ServicesCard = ({ title, description, image }: cardProps) => {
  return (
    <div className="bg-[#7C7CA4] rounded-lg">
      <Image src={image} alt={title} className="rounded-tl-lg rounded-tr-lg" />
      <div className="p-2">
        <h4 className="text-lg">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;

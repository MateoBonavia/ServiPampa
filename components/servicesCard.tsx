import Image from 'next/image';
import React from 'react';

interface cardProps {
  title: string;
  description: string;
  image: string;
}

const servicesCard = ({ title, description, image }: cardProps) => {
  return (
    <div>
      <Image src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default servicesCard;

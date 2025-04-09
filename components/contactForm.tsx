'use client';

import { useState } from 'react';

export default function ContactForm() {
  return (
    <div className="bg-[#ACACC4] rounded-lg p-2 md:mx-16 md:px-8 lg:mx-0 lg:w-150">
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
          <button className="bg-[#00001C] text-white p-2 rounded w-30 hover:cursor-pointer">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

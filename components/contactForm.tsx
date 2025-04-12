'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const sendEmail = async () => {
    const jsonData = JSON.stringify(formData);

    const res = await fetch('/api/send', {
      method: 'POST',
      body: jsonData,
    });
    const data = await res.json();
    // console.log(data);
  };

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
          placeholder="Nombre y apellido"
          className="border border-[#000] p-2 rounded"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Teléfono"
          className="border border-[#000] p-2 rounded"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <textarea
          placeholder="Mensaje"
          className="border border-[#000] p-2 rounded h-32"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>
        <div className="flex justify-end">
          <button
            className="bg-[#00001C] text-white p-2 rounded w-30 hover:cursor-pointer"
            onClick={sendEmail}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

'use client';

import { showToast } from 'nextjs-toast-notify';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    recipient: 'morrison',
  });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name === '') {
      showToast.error('Por favor, completa tu nombre.', {
        duration: 4000,
        progress: true,
        position: 'bottom-right',
        transition: 'bounceIn',
        icon: '',
        sound: false,
      });
    } else if (formData.phone === '') {
      showToast.error('Por favor, completa tu teléfono.', {
        duration: 4000,
        progress: true,
        position: 'bottom-right',
        transition: 'bounceIn',
        icon: '',
        sound: false,
      });
    } else if (formData.message === '') {
      showToast.error('Por favor, completa tu mensaje.', {
        duration: 4000,
        progress: true,
        position: 'bottom-right',
        transition: 'bounceIn',
        icon: '',
        sound: false,
      });
    } else {
      const jsonData = JSON.stringify(formData);

      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });
      const data = await res.json();
      resetFormData();

      showToast.success('¡Email enviado con éxito!', {
        duration: 4000,
        progress: true,
        position: 'bottom-right',
        transition: 'bounceIn',
        icon: '',
        sound: false,
      });
    }
  };

  const resetFormData = () => {
    setFormData({
      name: '',
      phone: '',
      message: '',
      recipient: 'morrison',
    });
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
      <form className="flex flex-col gap-4 mt-4" onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Nombre y apellido"
          className="border border-[#000] p-2 rounded"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />
        <input
          type="number"
          placeholder="Teléfono"
          className="border border-[#000] p-2 rounded"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          value={formData.phone}
        />
        <textarea
          placeholder="Mensaje"
          className="border border-[#000] p-2 rounded h-32"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          value={formData.message}
        ></textarea>
        <select
          className="border border-[#000] p-2 rounded"
          onChange={(e) =>
            setFormData({ ...formData, recipient: e.target.value })
          }
          value={formData.recipient}
        >
          <option value="morrison">Enviar a Morrison</option>
          <option value="escalante">Enviar a Escalante</option>
        </select>
        <div className="flex justify-end">
          <button
            className="bg-[#00001C] text-white p-2 rounded w-30 hover:cursor-pointer"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

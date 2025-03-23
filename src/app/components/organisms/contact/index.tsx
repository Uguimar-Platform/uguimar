"use client";
import React, { useState } from "react";
import InputAtom from "../../atoms/input/index";
import Button from "../../atoms/button/index";
import Image from "next/image";
import PictureContact from "../../../../../public/PictureContact.svg"; // Ajusta la ruta de la imagen según tu estructura

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mensaje enviado: ${formData.email} - ${formData.message}`);
  };

  return (
    <section className="flex flex-col items-center bg-white py-10">
      <h2 className="text-3xl font-bold text-black mb-6">Contacto</h2>

      <div className="flex items-center justify-center bg-[#5670CA] rounded-lg p-8 w-[80%] max-w-4xl">
        {/* Icono e ilustración */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/3">
          <Image src={PictureContact} alt="Icono de contacto" width={400} height={380} />
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg p-6 rounded-lg">
          <label className="font-semibold text-white">Correo:</label>
          <InputAtom
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 bg-white text-black rounded-lg p-3 w-full"
          />

          <label className="font-semibold text-white">Mensaje:</label>
          <textarea
            name="message"
            placeholder="Ingrese el mensaje a enviar"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 bg-white text-black rounded-lg p-3 w-full h-24 resize-none"
          />

        <Button type="submit" className="bg-[#3B5BDB] text-white flex justify-center items-center w-full p-2 rounded-lg hover:bg-[#364FC7]">
        Enviar
        </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

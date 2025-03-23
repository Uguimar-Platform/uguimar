"use client";
import React, { useState } from "react";
import InputAtom from "../../atoms/input/index";
import Button from "../../atoms/button/index";

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
    <section className="flex flex-col items-center bg-[#3f5eb5] py-10 px-4 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-black mb-6">Contacto</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-lg bg-[#cfe2f3] p-6 rounded-lg shadow-md"
      >
        <label className="text-gray-700 font-semibold">Correo:</label>
        <InputAtom
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 w-full"
        />

        <label className="text-gray-700 font-semibold">Mensaje:</label>
        <textarea
          name="message"
          placeholder="Ingrese el mensaje a enviar"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 w-full h-24 resize-none"
        />

        <Button type="submit" className="bg-[#232b5a] text-white font-semibold py-2 px-4 rounded-lg w-24 mx-auto">
          Enviar
        </Button>
      </form>
    </section>
  );
};

export default ContactSection;

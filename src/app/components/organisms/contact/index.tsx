"use client";
import React, { useState } from "react";
import InputAtom from "../../atoms/input/index";
import Button from "../../atoms/button/index";
import { Label } from "../../atoms/label";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mensaje enviado: ${formData.email} - ${formData.message}`);
  };

  return (
    <section className="flex flex-col items-center py-10">
      <div className="mb-8">
        <Label
          text="Contacto"
          as="h1"
          font="Onest"
          fontWeight={700}
          textColor="text-black"
          className="text-5xl 7 text-center"
        />
      </div>

      <div className="flex items-center justify-center bg-[#5670CA] pb-4 w-full ">
        <div className="hidden md:flex flex-col items-center justify-center w-1/3">
          <img src="/icon_contact.webp" alt="" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-lg p-6 rounded-lg space-y-2"
        >
          <label className="font-extrabold text-white font-['Onest'] text-2xl -mb-2">
            Correo:
          </label>
          <InputAtom
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 bg-white text-black rounded-lg p-3 w-full"
          />

          <label className="font-extrabold text-white font-['Onest'] text-2xl -mb-2">
            Mensaje:
          </label>
          <textarea
            name="message"
            placeholder="Ingrese el mensaje a enviar"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 bg-white text-black rounded-lg p-3 w-full h-24 resize-none"
          />

          <Button
            type="submit"
            fontFamily="Poppins"
            fontWeight={600}
            bgColor="bg-[#334EAC]"
            hoverColor="hover:bg-[#081F5C]"
            className=" text-white flex justify-center items-center w-full p-2 rounded-lg"
          >
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

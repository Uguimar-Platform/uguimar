"use client";
import React from "react";
import { Label } from "../../atoms/label";
import Button from "../../atoms/button";
import InputAtom from "../../atoms/input";
import { Search } from "@mynaui/icons-react";
const Hero: React.FC = () => {
  return (
    <section className="bg-blue-100 p-10 rounded-lg flex flex-col gap-6 items-center text-center">
      <div className="flex flex-row items-center gap-6 max-w-[1000px] mx-auto">
        <div>
          <div className="max-w-2xl">
            <Label
              as="h1"
              text="Aprende, crece y"
              textColor="text-black"
              font="Poppins"
              fontWeight={700}
              className="text-4xl"
            />
            <Label
              as="h1"
              text="destaca"
              textColor="text-purple"
              font="Poppins"
              fontWeight={700}
              className="text-4xl text-blue-900"
            />{" "}
            <Label
              as="h1"
              text="con cursos transformadores"
              textColor="text-black"
              font="Poppins"
              fontWeight={700}
              className="text-4xl"
            />
            <Label
              as="p"
              text="Tu plataforma de aprendizaje: crece, explora y alcanza tus metas con cursos que transforman."
              textColor="text-gray-600"
              font="Poppins"
              fontWeight={400}
              className="mt-4 text-lg text-start"
            />
          </div>

          <div className="bg-[#d0e3ff] rounded-lg">
            <InputAtom
              type="text"
              name="search"
              placeholder="¿Qué deseas aprender?"
              className="bg-[#e7f1ff]"
            />
          </div>

          <Button
            bgColor="bg-blue-500"
            hoverColor="hover:bg-blue-600"
            textColor="text-white"
            fontFamily="Poppins"
            fontWeight={500}
            icon="ArrowRight"
            iconPosition="right"
            className="rounded-full"
          >
            Empezar gratis
          </Button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/uguimar/image/upload/v1631590646/uguimar/hero-image_1_xjzv8o.png"
            alt="Hero"
            className="w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

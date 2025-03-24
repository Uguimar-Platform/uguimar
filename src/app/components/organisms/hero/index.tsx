"use client";
import React from "react";
import { Label } from "../../atoms/label";
import Button from "../../atoms/button";

const Hero: React.FC = () => {
  return (
    <section className="p-10 rounded-lg flex flex-col gap-6 items-center text-center">
      <div className="flex flex-row items-center gap-6">
        <div className="max-w-[610px] -mt-22">
          <div className="max-w-2xl">
            <Label
              as="h1"
              text="Aprende, crece y"
              textColor="text-black"
              font="sfpro"
              fontWeight={700}
              className="text-6xl"
            />
            <div className="flex-grow flex space-x-3">
              <Label
                as="h1"
                text="destaca"
                textColor="text-purple"
                font="sfpro"
                fontWeight={700}
                className="text-6xl text-blue-900"
              />{" "}
              <Label
                as="h1"
                text="con cursos"
                textColor="text-black"
                font="sfpro"
                fontWeight={700}
                className="text-6xl"
              />
            </div>
            <Label
              as="h1"
              text=" transformadores"
              textColor="text-black"
              font="sfpro"
              fontWeight={700}
              className="text-6xl"
            />
            <Label
              as="p"
              text="Tu plataforma de aprendizaje: crece, explora y alcanza tus metas con cursos que transforman."
              textColor="text-gray-600"
              font="sfpro"
              fontWeight={400}
              className="mt-6 text-2xl text-start mb-12"
            />
          </div>

          <Button
            bgColor="bg-[#7096D1]"
            hoverColor="hover:bg-blue-600"
            textColor="text-white"
            fontFamily="Onest"
            fontWeight={600}
            icon="ArrowRight"
            iconPosition="right"
            className="rounded-full px-8 py-3 text-lg"
          >
            Empezar gratis
          </Button>
        </div>
        <div className="">
          <img src="/img_hero1.webp" alt="Hero" className="w-[400px] h-full" />
          <img src="/img_hero2.webp" alt="Hero" className="w-[200px] h-full" />
          <img src="/img_hero3.webp" alt="Hero" className="w-[200px] h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";
import React from "react";
import  LabelAtom  from "../../atoms/label";
import ButtonAtom from "../../atoms/button";

const Hero: React.FC = () => {
  return (
    <section className="p-10 rounded-lg flex flex-col gap-6 items-center text-center">
      <div className="flex flex-row items-center gap-6">
        <div className="max-w-[610px] -mt-22">
          <div className="max-w-2xl">
            <LabelAtom
              as="h1"
              text="Aprende, crece y"
              textColor="000000"
              fontFamily="SFProDisplay"
              fontWeight="bold"
              fontSize={64}
            />
            <div className="flex-grow flex space-x-3">
              <LabelAtom
                as="h1"
                text="destaca"
                textColor="#334EAC"
                fontFamily="SFProDisplay"
                fontWeight={700}
                fontSize={64}
              />{" "}
              <LabelAtom
                as="h1"
                text="con cursos"
                textColor="000000"
                fontFamily="SFProDisplay"
                fontWeight={700}
                fontSize={64}
              />
            </div>
            <LabelAtom
              as="h1"
              text=" transformadores"
              textColor="text-black"
              fontFamily="SFProDisplay"
              fontWeight={700}
              fontSize={64}
            />
            <LabelAtom
              as="p"
              text="Tu plataforma de aprendizaje: crece, explora y alcanza tus metas con cursos que transforman."
              textColor="text-gray-600"
              fontFamily="SFProDisplay"
              fontWeight={400}
              fontSize={24}
              className="mt-6  text-start "
            />
          </div>

          <ButtonAtom
            bgColor="#7096D1"
            hoverColor="#3B82F6"
            textColor="#FFFFFF"
            fontFamily="Onest"
            fontWeight={600}
            icon="ArrowRight"
            iconPosition="right"
            className="rounded-full px-8 py-3 mt-6 text-lg"
          >
            Empezar gratis
          </ButtonAtom>
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

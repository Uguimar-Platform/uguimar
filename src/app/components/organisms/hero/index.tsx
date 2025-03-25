"use client";
import React from "react";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";

const Hero: React.FC = () => {
  return (
    <section className="p-10 rounded-lg flex flex-col items-center text-center">
      <div className="flex flex-row items-center justify-between w-[1050px] mx-auto">
        <div className="max-w-[610px] -mt-22 space-y-6">
          <div className="max-w-2xl -space-y-6">
            <LabelAtom
              as="h1"
              text="Aprende, crece y"
              textColor="000000"
              fontFamily="SFProDisplay"
              fontWeight="bold"
              fontSize={60}
            />
            <div className="flex-grow flex space-x-3">
              <LabelAtom
                as="h1"
                text="destaca"
                textColor="#334EAC"
                fontFamily="SFProDisplay"
                fontWeight={700}
                fontSize={60}
              />{" "}
              <LabelAtom
                as="h1"
                text="con cursos"
                textColor="000000"
                fontFamily="SFProDisplay"
                fontWeight={700}
                fontSize={60}
              />
            </div>
            <LabelAtom
              as="h1"
              text=" transformadores"
              textColor="text-black"
              fontFamily="SFProDisplay"
              fontWeight={700}
              fontSize={60}
            />
          </div>
          <LabelAtom
            as="p"
            text="Tu plataforma de aprendizaje: crece, explora y alcanza tus metas con cursos que transforman."
            textColor="text-gray-600"
            fontFamily="SFProDisplay"
            fontWeight={400}
            fontSize={24}
            className="text-start opacity-50 max-w-135  -mt-4"
          />
          <ButtonAtom
            bgColor="#7096D1"
            hoverColor="#3B82F6"
            textColor="#FFFFFF"
            fontFamily="Onest"
            fontWeight="semibold"
            icon="ArrowRight"
            iconPosition="right"
            iconSize={32}
            className="rounded-full px-10 py-2 mt-8 text-xl"
          >
            Empezar gratis
          </ButtonAtom>
        </div>
        <div>
          <img src="/img_hero1.webp" alt="Hero" className="w-[400px] h-full" />
          <div className="flex flex-row items-center justify-between ">
            <img
              src="/img_hero3.webp"
              alt="Hero"
              className="w-[200px] h-full justify-items-end -translate-x-[70px] translate-y-[40px]"
            />
            <img
              src="/img_hero2.webp"
              alt="Hero"
              className="w-[250px] h-full -translate-x-[40px] translate-y-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

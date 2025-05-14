"use client";
import React from "react";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";

const Hero: React.FC = () => {
  return (
    <section className="p-10 rounded-lg flex flex-col items-center text-center">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:w-[1150px] mx-auto">
        <div className="lg:max-w-[610px] md:max-w-[500px] sm:max-w-[410px] max-w-[375px] -mt-22 space-y-3 lg:space-y-4 flex flex-col  justify-center items-center lg:justify-start lg:items-start">
          <div className="max-w-2xl -space-y-5 lg:-space-y-8 flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <LabelAtom
              as="h1"
              text="Aprende, crece y"
              textColor="000000"
              fontFamily="SFProDisplay"
              fontWeight="bold"
              fontSize="text-[29px] sm:text-[44px] md:text-[36px] lg:text-[64px]"
            />
            <div className="flex-grow flex space-x-3">
              <LabelAtom
                as="h1"
                text="destaca"
                textColor="#334EAC"
                fontFamily="SFProDisplay"
                fontWeight={700}
                fontSize="text-[29px] sm:text-[44px] md:text-[36px] lg:text-[64px]"
              />{" "}
              <LabelAtom
                as="h1"
                text="con cursos"
                textColor="000000"
                fontFamily="SFProDisplay"
                fontWeight={700}
                fontSize="text-[29px] sm:text-[44px] md:text-[36px] lg:text-[64px]"
              />
            </div>
            <LabelAtom
              as="h1"
              text=" transformadores"
              textColor="text-black"
              fontFamily="SFProDisplay"
              fontWeight={700}
              fontSize="text-[29px] sm:text-[44px] md:text-[36px] lg:text-[64px]"
            />
          </div>
          <LabelAtom
            as="p"
            text="Tu plataforma de aprendizaje: crece, explora y alcanza tus metas con cursos que transforman."
            textColor="text-gray-600"
            fontFamily="SFProDisplay"
            fontWeight={400}
            fontSize="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px]"
            className="text-center lg:text-start opacity-50 max-w-135 leading-tight"
          />
          <ButtonAtom
            bgColor="#7096D1"
            hoverColor="#3B82F6"
            textColor="#FFFFFF"
            fontFamily="Onest"
            fontWeight={600}
            icon="ArrowRight"
            iconPosition="right"
            iconSize="text-[20px]"
            className="rounded-[50px] px-4 lg:px-10 lg:py-2.5 mt-8 text-sm lg:text-xl mb-12 lg:mb-0"
            text="Empezar gratis"
          />
        </div>
        <div className="flex flex-col ">
          <img src="/img_hero1.webp" alt="Hero" className="w-[400px] h-full" />
          <div className="flex flex-row items-center justify-between ">
            <img
              src="/img_hero3.webp"
              alt="Hero"
              className="w-[150px] lg:w-[200px] h-full lg:justify-items-end lg:-translate-x-[70px] lg:translate-y-[40px]"
            />
            <img
              src="/img_hero2.webp"
              alt="Hero"
              className="w-[250px] h-full lg:-translate-x-[40px] lg:translate-y-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

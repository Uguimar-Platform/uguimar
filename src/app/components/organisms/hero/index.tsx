"use client";
import React from "react";
import { Search } from "lucide-react"; // ícono SVG
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";
import InputAtom from "../../atoms/input";

interface HeroProps {
  ageGroup: string;
}

const Hero: React.FC<HeroProps> = ({ ageGroup }) => {
  const configs = {
    ninos: {
      mainColor: "#06356C",
      highlightText: "crece",
      description:
        "Tu plataforma de aprendizaje: crece, explora y alcanza tus metas con cursos que transforman.",
      background: "bg-hero-ninos",
    },
    jovenes: {
      mainColor: "#334EAC",
      highlightText: "destaca",
      description:
        "Impulsa tu futuro con cursos para jóvenes emprendedores.",
      background: "bg-hero-jovenes",
    },
    adultos: {
      mainColor: "#047857",
      highlightText: "crece",
      description:
        "Transforma tu carrera con cursos para adultos profesionales.",
      background: "bg-hero-adultos",
    },
  };

  const config =
    configs[ageGroup as keyof typeof configs] ?? configs["ninos"];

  const { mainColor, highlightText, description, background } = config;

  return (
    <section
      className={`p-10 rounded-lg flex flex-col items-center text-center ${background} bg-cover bg-center`}
    >
      <div className="flex flex-col items-center justify-center lg:w-[1150px] mx-auto">
        <div className="lg:max-w-[610px] text-white space-y-5 lg:space-y-6 flex flex-col items-center">
          <div className="max-w-2xl -space-y-5 lg:-space-y-8 flex flex-col items-center">
            <LabelAtom
              as="h1"
              text={`Aprende, ${highlightText} y`}
              textColor="#06356C"
              fontFamily="SFProDisplay"
              fontWeight="bold"
              fontSize="text-[29px] sm:text-[44px] md:text-[36px] lg:text-[64px]"
            />
            <div className="flex-grow flex space-x-3">
              <LabelAtom
                as="h1"
                text={`destaca`}
                textColor={mainColor}
                fontFamily="SFProDisplay"
                fontWeight={700}
                fontSize="text-[29px] sm:text-[44px] md:text-[36px] lg:text-[64px]"
              />
              <LabelAtom
                as="h1"
                text="con cursos"
                textColor="#06356C"
                fontFamily="SFProDisplay"
                fontWeight={700}
                fontSize="text-[29px] sm:text-[44px] md:text-[36px] lg:text-[64px]"
              />
            </div>
            <LabelAtom
              as="h1"
              text=" transformadores"
              textColor="#06356C"
              fontFamily="SFProDisplay"
              fontWeight={700}
              fontSize="text-[29px] sm:text-[44px] md:text-[36px] lg:text-[64px]"
            />
          </div>

          <LabelAtom
            as="p"
            text={description}
            textColor="#06356C"
            fontFamily="SFProDisplay"
            fontWeight={600}
            fontSize="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px]"
            className="text-center opacity-90 max-w-2xl leading-tight"
          />

          {/* Input con ícono SVG de Lucide */}
          <div className="relative w-full max-w-xl">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-white border border-[#A3D4F7] text-[#2B4D88] rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
              <Search size={16} strokeWidth={2} />
            </div>

            <InputAtom
              name="busqueda"
              placeholder="¿Qué deseas aprender?"
              colorBG="#E8F3FF"
              className="pl-12 pr-4 py-2.5 w-full text-[#2B4D88] placeholder-[#8FB8DA] text-sm border-2 border-[#A3D4F7] rounded-full focus:outline-none focus:ring-2 focus:ring-[#A3D4F7]"
              fontFamily="Poppins"
              fontWeight="medium"
            />
          </div>

          <ButtonAtom
            bgColor="#A3D4F7"
            hoverColor="#90C9F0"
            textColor="#06356C"
            fontFamily="Onest"
            fontWeight={600}
            icon="ArrowRight"
            iconPosition="right"
            iconSize="text-[20px]"
            className="rounded-full px-6 lg:px-10 lg:py-2.5 mt-4 text-sm lg:text-base shadow-md"
            text={`Empezar Gratis`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

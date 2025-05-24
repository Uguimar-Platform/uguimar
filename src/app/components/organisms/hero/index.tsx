"use client";
import React from "react";
import { Search } from "lucide-react";
import { Spicy_Rice } from "next/font/google";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";
import InputAtom from "../../atoms/input";

// Importación de fuente para niños
const spicyRice = Spicy_Rice({ weight: "400", subsets: ["latin"] });

interface HeroProps {
  ageGroup: string;
}

const Hero: React.FC<HeroProps> = ({ ageGroup }) => {
  const configs = {
    ninos: {
      mainColor: "#06356C",
      description:
        "Tu plataforma de aprendizaje: crece, explora y alcanza tus metas con cursos que transforman.",
      background: "bg-hero-ninos",
      fontClass: spicyRice.className,
    },
    jovenes: {
      mainColor: "#334EAC",
      description: "Impulsa tu futuro con cursos para jóvenes emprendedores.",
      background: "bg-hero-jovenes",
      fontClass: "", // Puedes añadir otra fuente si deseas
    },
    adultos: {
      mainColor: "#047857",
      description: "Transforma tu carrera con cursos para adultos profesionales.",
      background: "bg-hero-adultos",
      fontClass: "", // Puedes añadir otra fuente si deseas
    },
  };

  const config = configs[ageGroup as keyof typeof configs] ?? configs["ninos"];
  const { mainColor, description, background, fontClass } = config;

  return (
    <section
      className={`p-10 rounded-lg flex flex-col items-center text-center ${background} bg-cover bg-center`}
    >
      <div className="flex flex-col items-center justify-center lg:w-[1150px] mx-auto">
        <div className="w-full text-white space-y-5 lg:space-y-6 flex flex-col items-center">

          {/* Título con fuente y color dinámico */}
          <div className={`w-full space-y-2 lg:space-y-1 flex flex-col items-center text-balance ${fontClass}`}>
            <LabelAtom
              as="h1"
              text="Aprende, crece y destaca con"
              textColor={mainColor}
              fontFamily="inherit"
              fontWeight="medium"
              fontSize="text-[32px] sm:text-[44px] md:text-[48px] lg:text-[64px]"
              className="tracking-normal"
            />
            <LabelAtom
              as="h1"
              text="cursos transformadores"
              textColor={mainColor}
              fontFamily="inherit"
              fontWeight="medium"
              fontSize="text-[32px] sm:text-[44px] md:text-[48px] lg:text-[64px]"
              className="tracking-normal"
            />
          </div>

          {/* Descripción */}
          <LabelAtom
            as="p"
            text={description}
            textColor={mainColor}
            fontFamily="SFProDisplay"
            fontWeight={600}
            fontSize="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px]"
            className="text-center opacity-90 max-w-2xl leading-tight"
          />

          {/* Input con ícono SVG integrado */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-xl bg-[#E8F3FF] border-2 border-[#A3D4F7] rounded-full px-4 py-2.5 flex items-center gap-3 focus-within:ring-2 focus-within:ring-[#A3D4F7]">
              <div className="bg-white border border-[#A3D4F7] text-[#2B4D88] rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                <Search size={16} strokeWidth={2} />
              </div>

              <InputAtom
                name="busqueda"
                placeholder="¿Qué deseas aprender?"
                colorBG="transparent"
                className="flex-1 text-[#2B4D88] placeholder-[#8FB8DA] text-sm bg-transparent focus:outline-none"
                fontFamily="Poppins"
                fontWeight="medium"
              />
            </div>
          </div>

          {/* Botón */}
          <ButtonAtom
            bgColor="#A3D4F7"
            hoverColor="#90C9F0"
            textColor={mainColor}
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

"use client";
import React from "react";
import { Search } from "lucide-react";
import { Spicy_Rice } from "next/font/google";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";
import InputAtom from "../../atoms/input";
import { useUserType } from "../../organisms/header";

const spicyRice = Spicy_Rice({ weight: "400", subsets: ["latin"] });

const Hero: React.FC = () => {
  const { userType } = useUserType();
  const isChild = userType === "child";

  const config = {
    mainColor: isChild ? "#06356C" : "#334EAC",
    description:
      "Tu plataforma de aprendizaje: crece, explora y alcanza tus metas con cursos que transforman.",
    fontClass: isChild ? spicyRice.className : "font-[SFProDisplay]",
  };

  return (
    <section
      className={`relative w-full overflow-visible pt-5 ${
        isChild
          ? "pb-[450px] sm:pb-[500px] md:pb-[600px] lg:pb-[680px]"
          : "pb-10"
      }`}
    >
      {/* Fondo ilustrado para niños */}
      {isChild && (
        <>
          <img
            src="/Nubes_Hero.webp"
            alt="Nubes"
            className="absolute top-[-50px] sm:top-[-60px] md:top-[-5px] lg:top-[-100px] left-0 w-full h-auto z-0 pointer-events-none"
          />
          <img
            src="/Cesped_Hero.webp"
            alt="Césped"
            className="absolute top-28 sm:top-32 md:top-60 lg:top-60 w-full h-auto object-contain z-10 pointer-events-none"
          />
          <img
            src="/School.webp"
            alt="Escuela"
            className="absolute top-[100px] sm:top-[150px] md:top-[300px] lg:top-[380px]  left-1/2 transform -translate-x-1/2 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] z-10 pointer-events-none hidden lg:block"
          />
          <img
            src="/Ballena_Hero.webp"
            alt="Ballena"
            className="absolute top-42 sm:top-50 md:top-80 lg:top-90 left-0 -full h-auto object-cover z-20 pointer-events-none"
          />
        </>
      )}

      {/* Contenido del Hero */}
      <div className="relative z-30 flex flex-col items-center justify-center lg:w-[1150px] mx-auto px-4">
        {isChild ? (
          <div
            className={`text-center space-y-2 sm:space-y-3 ${config.fontClass}`}
          >
            <LabelAtom
              as="h1"
              text="Aprende, crece y destaca con"
              textColor={config.mainColor}
              fontFamily="LilyScriptOne"
              fontWeight="medium"
              fontSize="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px]"
            />
            <LabelAtom
              as="h1"
              text="cursos transformadores"
              textColor={config.mainColor}
              fontFamily="LilyScriptOne"
              fontWeight="medium"
              fontSize="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px]"
            />
          </div>
        ) : (
          <h1 className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[64px] font-extrabold font-[SFProDisplay] leading-tight text-center">
            <span className="text-black">Aprende, crece y </span>
            <span className="text-[#334EAC]">destaca</span>
            <span className="text-black"> con</span>
            <br />
            <span className="text-black">cursos transformadores</span>
          </h1>
        )}

        <LabelAtom
          as="p"
          text={config.description}
          textColor="#858585"
          fontFamily="SFProDisplay"
          fontWeight={400}
          fontSize="text-[15px] sm:text-[17px] md:text-[20px]"
          className="text-center opacity-90 max-w-2xl leading-tight mt-4"
        />

        <div className="w-full flex justify-center mt-6 px-4">
          <div className="w-full max-w-xl bg-white border-2 border-[#A3D4F7] rounded-full px-4 py-2.5 sm:py-3 md:py-3.5 flex items-center gap-3 focus-within:ring-2 focus-within:ring-[#A3D4F7]">
            <div className="bg-white border border-[#A3D4F7] text-[#2B4D88] rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center shadow-sm">
              <Search size={18} strokeWidth={2} />
            </div>

            <InputAtom
              name="busqueda"
              placeholder="¿Qué deseas aprender?"
              colorBG="transparent"
              className="flex-1 text-[#2B4D88] placeholder-[#8FB8DA] w-full text-sm sm:text-base md:text-base bg-transparent focus:outline-none"
              fontFamily="Poppins"
              fontWeight="medium"
            />
          </div>
        </div>

        <ButtonAtom
          bgColor={config.mainColor}
          hoverColor="#263a7e"
          textColor="#fff"
          fontFamily="Onest"
          fontWeight={600}
          icon="ArrowRight"
          iconPosition="right"
          iconSize="text-[20px]"
          className="rounded-full px-6 lg:px-10 lg:py-2.5 mt-4 text-sm lg:text-base shadow-md"
          text="Empezar gratis"
        />
      </div>
    </section>
  );
};

export default Hero;

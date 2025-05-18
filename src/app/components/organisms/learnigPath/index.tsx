"use client";
import React from "react";
import TextAreaAtom from "../../atoms/textarea";
import { useState, useEffect } from "react";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";

interface LearningPathProps {
  className?: string;
  style?: React.CSSProperties;
}

const LearningPathSection: React.FC<LearningPathProps> = ({}) => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="flex flex-col items-center justify-center mb-12 -space-y-6">
        <LabelAtom
          text="Descubre tu ruta de"
          as="h1"
          fontFamily="SFProDisplay"
          fontWeight={700}
          textColor="text-black"
          fontSize="text-[64px]"
          className="text-center"
        />
        <LabelAtom
          text="aprendizaje personalizada"
          as="h1"
          fontFamily="SFProDisplay"
          fontWeight={700}
          textColor="#334EAC"
          fontSize="text-[64px]"
          className="text-center"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center w-full max-w-xl">
          <div className="bg-white rounded-3xl border border-gray-400 p-4 w-full">
            <LabelAtom
              text="Crea tu ruta personalizada"
              fontWeight="bold"
              className="justify-center mb-2"
            />
            <TextAreaAtom
              name="routeName"
              placeholder="Ruta personalizada"
              colorBG="#E7F1FF"
              className="w-full border border-[#202020] rounded-xl"
              maxLength={256}
            />
          </div>

          <div className="mt-4">
            <ButtonAtom
              bgColor="#334EAC"
              textColor="#ffffff"
              hoverColor="#4A66C7"
              fontFamily="Onest"
              fontWeight={700}
              className="rounded-full text-xl px-12 py-3 text-center"
              text="Generar ruta"
            />
          </div>
        </div>

        <div className="flex justify-center md:justify-start mt-4 md:mt-0">
          <img
            src="/logoIzquierda.svg"
            alt="Logo"
            className="w-32 h-32 md:w-44 md:h-44"
          />
        </div>
      </div>
    </section>
  );
};

interface KidsLearningPathProps {
  className?: string;
  style?: React.CSSProperties;
}

const KidsLearningPathSection: React.FC<KidsLearningPathProps> = ({}) => {
  return (
    <section className="relative flex flex-col sm:flex-row items-center sm:items-start justify-between py-6 sm:py-8 md:py-12 px-4 sm:px-8 md:px-16 bg-[#FFFFFF] min-h-screen overflow-hidden">
      {/* Imagen de nubes de fondo */}
      <img
        src="/img_nubes.webp"
        alt="Nubes de fondo"
        className="absolute -bottom-70 left-0 w-full h-[120vh] sm:h-[130vh] md:h-[140vh] object-cover z-[1]"
      />

      {/* Contenedor principal - cambia a columna en móvil */}
      <div className="flex flex-col sm:flex-row sm:gap-8 md:gap-16 items-center sm:items-start w-full relative z-[2] mt-16 sm:mt-8 md:mt-0">
        {/* Título - centrado en móvil, alineado a la izquierda en desktop */}
        <div className="flex flex-col items-center sm:items-start justify-start mb-8 sm:mb-0 w-full sm:w-auto">
          <LabelAtom
            text="Descubre tu ruta de"
            as="h1"
            fontFamily="BlackMango"
            fontWeight="extrabold"
            textColor="text-[#FF6B6B]"
            fontSize="text-[28px] sm:text-[32px] md:text-[35px]"
            className="text-center sm:text-left mt-2 sm:ml-0 md:ml-16"
          />
          <LabelAtom
            text="aprendizaje personalizada"
            as="h1"
            fontFamily="BlackMango"
            fontWeight="extrabold"
            textColor="#081F5C"
            fontSize="text-[28px] sm:text-[32px] md:text-[35px]"
            className="text-center sm:text-left -mt-2"
          />
        </div>

        {/* Formulario - ancho completo en móvil, limitado en desktop */}
        <div className="flex flex-col items-center w-full max-w-[95%] sm:max-w-[80%] md:max-w-xl">
          <div className="bg-white rounded-3xl border border-gray-400 p-3 sm:p-4 w-full">
            <LabelAtom
              text="Crea tu ruta personalizada"
              fontWeight="bold"
              className="justify-center mb-2 text-center text-sm sm:text-base"
            />
            <TextAreaAtom
              name="routeName"
              placeholder="Ruta personalizada"
              colorBG="#E7F1FF"
              className="w-full border border-[#202020] rounded-xl p-2 sm:p-3"
              maxLength={256}
            />
          </div>

          <div className="mt-3 sm:mt-4">
            <ButtonAtom
              bgColor="#334EAC"
              textColor="#ffffff"
              hoverColor="#4A66C7"
              fontFamily="Onest"
              fontWeight={700}
              className="rounded-full text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-2 sm:py-2.5 md:py-3 text-center"
              text="Generar ruta"
            />
          </div>
        </div>
      </div>

      {/* Logo - más pequeño y reposicionado en móvil */}
      <div className="absolute top-2 sm:top-4 md:top-7 right-2 sm:right-8 md:right-16 lg:right-100 z-10">
        <img src="/LogoUguimarKids.svg" alt="Logo" className="w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48" />
      </div>
    </section>
  )
};

// Interfaz para las propiedades del componente principal
interface CombinedLearningPathProps {
  className?: string;
  style?: React.CSSProperties;
  defaultUserType?: "adult" | "child";
  ageThreshold?: number; // Edad límite para considerar niño o adulto
  ageUser?: number; // Propiedad para establecer la edad del usuario
}

// LOGICA PARA COMBINAR LOS COMPONENTES
const CombinedLearningPath: React.FC<CombinedLearningPathProps> = ({
  className,
  style,
  defaultUserType = "child",
  ageThreshold = 18,
  ageUser,
}) => {
  // Estado para controlar qué interfaz mostrar
  const [userType, setUserType] = useState<"adult" | "child">(defaultUserType);

  // Estado para la edad del usuario
  const [age, setAge] = useState<number | null>(ageUser || null);

  // Efecto para determinar el tipo de usuario basado en la edad cuando se proporciona ageUser
  useEffect(() => {
    if (ageUser !== undefined) {
      setAge(ageUser);
      setUserType(ageUser < ageThreshold ? "child" : "adult");
    }
  }, [ageUser, ageThreshold]);
  return (
    <div className={className} style={style}>
      {/* Renderizado condicional basado en el tipo de usuario */}
      {userType === "adult" ? (
        <LearningPathSection />
      ) : (
        <KidsLearningPathSection />
      )}
    </div>
  );
};

// Exportamos los componentes individuales y el componente combinado como predeterminado
export { LearningPathSection, KidsLearningPathSection };
export default CombinedLearningPath;

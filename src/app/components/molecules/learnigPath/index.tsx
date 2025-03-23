"use client";
import React from "react";
import InputField from "../../molecules/inputField";
import { Label } from "../../atoms/label";
import Button from "../../atoms/button";

/**
 * Props for the SectionPersonalizedRoute component.
 */
interface LearningPathProps {
  /** Tailwind CSS class for the section container. */
  className?: string;
  /** Inline styles to apply to the section container. */
  style?: React.CSSProperties;
}

const LearningPathSection: React.FC<LearningPathProps> = ({}) => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 bg-[#E6F0FF] text-center">
      {/* Título centrado */}
      <div className="flex flex-col items-center justify-center mb-12">
        <Label
          text="Descubre tu ruta de"
          as="h1"
          font="sfpro"
          fontWeight={700}
          textColor="text-black"
          className="text-7xl 7 text-center"
        />
        <Label
          text="aprendizaje personalizada"
          as="h1"
          font="sfpro"
          fontWeight={700}
          textColor="text-[#334EAC]"
          className="text-7xl 7 text-center"
        />
      </div>

    {/* Contenedor de la tarjeta y la imagen */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl">
        {/* Contenedor para InputField y botón */}
        <div className="flex flex-col items-center w-full max-w-xl">
          {/* Tarjeta de entrada */}
          <div className="bg-white rounded-xl border-1 border-gray-400 shadow-md p-6 w-full">
            <InputField
              label="Crea tu ruta personalizada"
              name="routeName"
              placeholder="Ruta personalizada"
              inputClassName="bg-[#F5F8FF] text-[#202020] rounded-md border border-gray-400 w-full"
              labelClassName="text-[#202020] font-bold text-md mb-2"
              labelPosition="center"
            />
          </div>
          
          {/* Botón debajo del div blanco */}
          <div className="mt-4">
            <Button
              bgColor="bg-[#334EAC]"
              textColor="text-white"
              hoverColor="hover:bg-[#4A66C7]"
              className="rounded-md px-6 py-3 font-medium text-center"
            >
              Generar ruta
            </Button>
          </div>
        </div>

        {/* Logo a la derecha */}
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

export default LearningPathSection;

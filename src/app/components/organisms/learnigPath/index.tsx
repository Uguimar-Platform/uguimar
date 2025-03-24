"use client";
import React from "react";
import InputField from "../../molecules/inputField";
import { Label } from "../../atoms/label";
import Button from "../../atoms/button";
interface LearningPathProps {
  className?: string;
  style?: React.CSSProperties;
}

const LearningPathSection: React.FC<LearningPathProps> = ({}) => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="flex flex-col items-center justify-center mb-12">
        <Label
          text="Descubre tu ruta de"
          as="h1"
          font="sfpro"
          fontWeight={700}
          textColor="text-black"
          className="text-5xl 7 text-center"
        />
        <Label
          text="aprendizaje personalizada"
          as="h1"
          font="sfpro"
          fontWeight={700}
          textColor="text-[#334EAC]"
          className="text-5xl 7 text-center"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center w-full max-w-xl">
          <div className="bg-white rounded-xl border-1 border-gray-400 p-6 w-full">
            <InputField
              label="Crea tu ruta personalizada"
              name="routeName"
              placeholder="Ruta personalizada"
              inputClassName="bg-[#F5F8FF] text-[#202020] rounded-md border border-gray-400 w-full"
              labelFontFamily="sfpro"
              labelFontWeight={700}
              labelClassName="text-lg"
              labelPosition="center"
            />
          </div>

          <div className="mt-4">
            <Button
              bgColor="bg-[#334EAC]"
              textColor="text-white"
              hoverColor="hover:bg-[#4A66C7]"
              fontFamily="Onest"
              fontWeight={700}
              className="rounded-full text-xl px-12 py-3 font-medium text-center"
            >
              Generar ruta
            </Button>
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

export default LearningPathSection;

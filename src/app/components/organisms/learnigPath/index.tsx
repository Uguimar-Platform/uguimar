"use client";
import React from "react";
import InputField from "../../molecules/inputField";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";

interface LearningPathProps {
  className?: string;
  style?: React.CSSProperties;
}

const LearningPathSection: React.FC<LearningPathProps> = ({}) => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="flex flex-col items-center justify-center mb-12">
        <LabelAtom
          text="Descubre tu ruta de"
          as="h1"
          fontFamily="SFProDisplay"
          fontWeight={700}
          textColor="text-black"
          fontSize={64}
          className="text-center"
        />
        <LabelAtom
          text="aprendizaje personalizada"
          as="h1"
          fontFamily="SFProDisplay"
          fontWeight={700}
          textColor="#334EAC"
          fontSize={64}
          className="text-center"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center w-full max-w-xl">
          <div className="bg-white rounded-xl border border-gray-400 p-6 w-full">
            <InputField
              label="Crea tu ruta personalizada"
              name="routeName"
              placeholder="Ruta personalizada"
              inputClassName="bg-[#F5F8FF] text-[#202020] rounded-md border border-gray-400 w-full"
              labelFontFamily="SFProDisplay"
              labelFontWeight={800}
              labelClassName="text-lg"
              labelPosition="center"
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
            >
              Generar ruta
            </ButtonAtom>
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

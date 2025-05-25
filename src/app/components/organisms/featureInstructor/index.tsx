"use client";
import React from "react";
import LabelAtom, { FontFamily } from "../../atoms/label";
import CardInstructor from "../../molecules/cardInstructor";
import { useUserType } from "../../organisms/header";

const fontsByAge: Record<
  "child" | "adult",
  {
    labelFont: FontFamily;
    titleFont: FontFamily;
    descriptionFont: FontFamily;
  }
> = {
  child: {
    labelFont: "Kavoon",
    titleFont: "Onest",
    descriptionFont: "SFProDisplay",
  },
  adult: {
    labelFont: "SFProDisplay",
    titleFont: "SFProDisplay",
    descriptionFont: "SFProDisplay",
  },
};

const FeatureInstructor: React.FC = () => {
  const { userType } = useUserType();
  const isChild = userType === "child";
  const fonts = fontsByAge[isChild ? "child" : "adult"];
  const { labelFont, titleFont, descriptionFont } = fonts;

  const backgroundKid = "/featureinstructor.webp";

  return (
    <div
      className={`w-full ${isChild ? "bg-no-repeat bg-cover bg-center" : ""}`}
      style={
        isChild
          ? {
              backgroundImage: `url(${backgroundKid})`,
              backgroundPosition: "center bottom",
            }
          : undefined
      }
    >
      <section className="flex flex-col items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <LabelAtom
          text="Aprende con los mejores"
          as="h1"
          fontFamily={labelFont}
          fontWeight={700}
          textColor="text-black"
          fontSize="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px]"
          className="text-center"
        />
        <LabelAtom
          text="profesores"
          as="h1"
          fontFamily={labelFont}
          fontWeight={700}
          textColor="#334EAC"
          fontSize="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px]"
          className="text-center -mt-4 sm:-mt-6 mb-12"
        />

        <div className="flex flex-col gap-8 w-full">
          <CardInstructor
            imageSrc="/teacher_1.webp"
            title="Valeria Montes Rivas"
            description="Especialista en educación inicial con más de 10 años de experiencia ayudando a los más pequeños a descubrir su pasión por el aprendizaje."
            className="border border-[#334EAC] bg-[#F9FCFF] self-start"
            fontFamilyTitle={titleFont}
            fontFamilyDescription={descriptionFont}
          />
          <CardInstructor
            imageSrc="/teacher_2.webp"
            title="Andrés Ferrer Guzmán"
            description="Innovador educativo apasionado por la tecnología y la enseñanza interactiva, ideal para entornos virtuales creativos."
            textColorTitle="#E7F1FF"
            textColorDescription="#E7F1FF"
            className="border border-gray-400 bg-[#334EAC] self-end"
            fontFamilyTitle={titleFont}
            fontFamilyDescription={descriptionFont}
          />
          <CardInstructor
            imageSrc="/teacher_3.webp"
            title="Emilio Vargas Sotelo"
            description="Docente universitario y mentor en habilidades blandas, comprometido con el desarrollo personal de sus estudiantes."
            className="border border-gray-400 bg-white self-start"
            fontFamilyTitle={titleFont}
            fontFamilyDescription={descriptionFont}
          />
          <CardInstructor
            imageSrc="/teacher_4.webp"
            title="Mateo Cisneros Luján"
            description="Experto en programación y robótica educativa para niños, con métodos basados en el juego y la resolución de problemas."
            textColorTitle="#E7F1FF"
            textColorDescription="#E7F1FF"
            className="border border-gray-400 bg-[#334EAC] self-end"
            fontFamilyTitle={titleFont}
            fontFamilyDescription={descriptionFont}
          />
        </div>
      </section>
    </div>
  );
};

export default FeatureInstructor;

"use client";
import React from "react";
import LabelAtom, { FontFamily } from "../../atoms/label";
import CardInstructor from "../../molecules/cardInstructor";
import { useUserType } from "../../organisms/header";

const fontsByAge: Record<
  "child" | "teen" | "adult",
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
  teen: {
    labelFont: "Poppins",
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
  const fonts = fontsByAge[userType as "child" | "teen" | "adult"];
  const { labelFont, titleFont, descriptionFont } = fonts;

  const backgroundKid = "/featureinstructor.png";
  const isKid = userType === "child";

  return (
    <div
      style={
        isKid
          ? {
              backgroundImage: `url(${backgroundKid})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "center calc(100% - 5rem)", 
              width: "100%",
            }
          : undefined
      }
      className={isKid ? "w-full" : ""}
    >
      <section className="flex flex-col items-center max-w-4xl mx-auto">
        <LabelAtom
          text="Aprende con los mejores"
          as="h1"
          fontFamily={labelFont}
          fontWeight={700}
          textColor="text-black"
          fontSize="text-[48px] sm:text-[56px] md:text-[64px]"
          className="text-center"
        />
        <LabelAtom
          text="profesores"
          as="h1"
          fontFamily={labelFont}
          fontWeight={700}
          textColor="#334EAC"
          fontSize="text-[48px] sm:text-[56px] md:text-[64px]"
          className="text-center -mt-4 sm:-mt-6 mb-12"
        />

        <div className="flex flex-col gap-8 mt-6 w-full">
          <CardInstructor
            imageSrc="/teacher_1.webp"
            title="Valeria Montes Rivas"
            description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown-"
            className="border border-[#334EAC] bg-[#F9FCFF] self-start"
            fontFamilyTitle={titleFont}
            fontFamilyDescription={descriptionFont}
          />
          <CardInstructor
            imageSrc="/teacher_2.webp"
            title="Andrés Ferrer Guzmán"
            description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown-"
            textColorTitle="#E7F1FF"
            textColorDescription="#E7F1FF"
            className="border border-gray-400 bg-[#334EAC] self-end"
            fontFamilyTitle={titleFont}
            fontFamilyDescription={descriptionFont}
          />
          <CardInstructor
            imageSrc="/teacher_3.webp"
            title="Emilio Vargas Sotelo"
            description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown-"
            className="border border-gray-400 bg-white self-start"
            fontFamilyTitle={titleFont}
            fontFamilyDescription={descriptionFont}
          />
          <CardInstructor
            imageSrc="/teacher_4.webp"
            title="Mateo Cisneros Luján"
            description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown-"
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

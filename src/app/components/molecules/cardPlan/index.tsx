"use client";

import React from "react";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";

type FontFamily = "Poppins" | "Onest" | "SFProDisplay";
type FontWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

interface CardPlanProps {
  imageSrc: string[];
  smallLabel: string;
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  bgColor: string;
  buttonHoverColor: string;
  labelColor: string;
  textColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
  smallLabelFontFamily?: FontFamily;
  smallLabelFontWeight?: FontWeight;
  titleFontFamily?: FontFamily;
  titleFontWeight?: FontWeight;
  priceFontFamily?: FontFamily;
  priceFontWeight?: FontWeight;
  featuresTitleFontFamily?: FontFamily;
  featuresTitleFontWeight?: FontWeight;
  featuresItemsFontFamily?: FontFamily;
  featuresItemsFontWeight?: FontWeight;
  buttonFontFamily?: FontFamily;
  buttonFontWeight?: FontWeight;
}

const CardPlan: React.FC<CardPlanProps> = ({
  imageSrc,
  smallLabel,
  title,
  price,
  features,
  buttonText,
  bgColor,
  labelColor,
  textColor,
  buttonBgColor,
  buttonHoverColor,
  buttonTextColor,


  
}) => {
  return (
    <div
      className={`${bgColor} rounded-4xl py-8 px-8 w-[450px] flex flex-col gap-4 items-center justify-start`}
    >
      <div className="flex justify-center gap-2">
        {imageSrc.map((src, index) => (
          <img key={index} src={src} className="w-16 h-16 object-contain" />
        ))}
      </div>
      <LabelAtom
        text={smallLabel}
        textColor={labelColor}
        fontSize={14}
        fontFamily="SFProDisplay"
        fontWeight={400}
      />
      <LabelAtom
        text={title}
        as="h2"
        fontFamily="Onest"
        fontWeight={800}
        textColor={textColor}
        fontSize={40}
      />
      <div className="flex items-baseline gap-1 -mt-2">
        <LabelAtom
          text={`S/. ${price}`}
          fontFamily="Onest"
          fontWeight={700}
          textColor={textColor}
          fontSize={40}
        />
        <LabelAtom
          text="/Anual"
          fontFamily="Poppins"
          fontWeight={400}
          fontSize={14}
          textColor={textColor}
        />
      </div>

      <ul className="flex flex-col gap-2 mt-6">
        <LabelAtom
          text="Beneficios:"
          textColor={textColor}
          className="flex justify-center"
          fontFamily="Poppins"
          fontWeight={700}
          fontSize={20}
        />
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center leading-normal"
          >
            <LabelAtom
              text={feature}
              icon="CheckWavesSolid"
              textColor={textColor}
              fontFamily="Poppins"
              fontWeight={600}
              fontSize={18}
            />
          </li>
        ))}
      </ul>

      <ButtonAtom
        textColor={buttonTextColor}
        bgColor={buttonBgColor}
        hoverColor={buttonHoverColor}
        fontFamily="Onest"
        fontWeight={800}
        className="w-[60%] justify-center items-center text-center rounded-4xl text-2xl py-2 mt-10"
      >
        {buttonText}
      </ButtonAtom>
    </div>
  );
};

export default CardPlan;

"use client";

import React from "react";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";
import { CheckWavesSolid } from "@mynaui/icons-react";

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
      className={`${bgColor} rounded-4xl p-12 w-[300px] h-[600px] md:w-[400px] md:h-[760px] flex flex-col gap-4 items-center justify-center transition-transform hover:scale-105 shadow-lg`}
    >
      <div className="flex justify-center gap-2">
        {imageSrc.map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-12 h-12 md:w-18 md:h-18 object-contain"
          />
        ))}
      </div>
      <LabelAtom
        text={smallLabel}
        textColor={labelColor}
        fontSize="text-[14px] md:text-[18px]"
        fontFamily="SFProDisplay"
        fontWeight={400}
        className="opacity-50"
      />
      <LabelAtom
        text={title}
        as="h2"
        fontFamily="Onest"
        fontWeight={800}
        textColor={textColor}
        fontSize="text-[32px] md:text-[40px]"
      />
      <div className="flex items-baseline gap-1 -mt-4 md:-mt-6">
        <LabelAtom
          text={`S/. ${price}`}
          fontFamily="SFProDisplay"
          fontWeight={700}
          textColor={textColor}
          fontSize="text-[32px] md:text-[40px]"
        />
        <LabelAtom
          text="/Anual"
          fontFamily="Poppins"
          fontWeight={400}
          fontSize="text-[12px] md:text-[15px]"
          textColor={textColor}
        />
      </div>

      <ul className="flex flex-col gap-2 mt-4 md:mt-6">
        <LabelAtom
          text="Beneficios:"
          textColor={textColor}
          className="flex justify-center"
          fontFamily="Poppins"
          fontWeight={700}
          fontSize="text-[16px] md:text-[20px]"
        />
        {features.map((feature, index) => (
          <li
            key={index}
            className="grid grid-cols-[auto_1fr] items-center gap-2 md:gap-4"
          >
            <CheckWavesSolid
              size={20}
              className="shrink-0 text-white w-4 h-4 md:w-6 md:h-6"
            />
            <LabelAtom
              text={feature}
              fontFamily="Poppins"
              fontWeight={600}
              fontSize="text-[14px] md:text-[18px]"
              textColor={textColor}
              className="leading-5 md:leading-6"
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
        textSize="xl"
        className="w-[70%] md:w-[60%] justify-center items-center text-center rounded-4xl text-lg md:text-2xl py-2 mt-6 md:mt-10"
        text={buttonText}
      />
    </div>
  );
};

export default CardPlan;

"use client";

import React from "react";
import LabelAtom from "../../atoms/label";
import Button from "../../atoms/button";
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
  buttonTextColor,
  smallLabelFontFamily = "Poppins",
  smallLabelFontWeight = "medium",
  titleFontFamily = "SFProDisplay",
  titleFontWeight = 700,
  priceFontFamily = "Poppins",
  priceFontWeight = 600,
  featuresTitleFontFamily = "Poppins",
  featuresTitleFontWeight = 700,
  featuresItemsFontFamily = "Poppins",
  featuresItemsFontWeight = "medium",
  buttonFontFamily = "Poppins",
  buttonFontWeight = 600,
}) => {
  return (
    <div
      className={`${bgColor} rounded-4xl py-12 w-full max-w-[22rem] p-9 flex flex-col gap-4 items-center justify-center`}
    >
      <div className="flex justify-center gap-2">
        {imageSrc.map((src, index) => (
          <img key={index} src={src} className="w-16 h-16 object-contain" />
        ))}
      </div>
      <LabelAtom
        text={smallLabel}
        textColor={labelColor}
        className="text-sm"
        fontFamily={smallLabelFontFamily}
        fontWeight={smallLabelFontWeight}
      />
      <LabelAtom
        text={title}
        as="h2"
        fontFamily={titleFontFamily}
        fontWeight={titleFontWeight}
        textColor={textColor}
        className="text-4xl"
      />
      <div className="flex items-baseline gap-1 -mt-2">
        <LabelAtom
          text={`S/. ${price}`}
          fontFamily={priceFontFamily}
          fontWeight={priceFontWeight}
          textColor={textColor}
          className="text-4xl"
        />
        <span className={`text-sm font-Poppins ${textColor}`}>/Anual</span>
      </div>

      <ul className="flex flex-col gap-2 mt-6">
        <LabelAtom
          text="Beneficios:"
          textColor={textColor}
          className="flex justify-center text-xl"
          fontFamily={featuresTitleFontFamily}
          fontWeight={featuresTitleFontWeight}
        />
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center leading-tight gap-2.5 text-sm ${textColor}`}
            style={{
              fontFamily: featuresItemsFontFamily,
              fontWeight:
                featuresItemsFontWeight === "medium"
                  ? 500
                  : featuresItemsFontWeight,
            }}
          >
            <CheckWavesSolid className={`${textColor} w-5 h-5 flex-shrink-0`} />
            <span className="font-['Poppins'] font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        textColor={buttonTextColor}
        bgColor={buttonBgColor}
        hoverColor="hover:brightness-75"
        fontFamily={buttonFontFamily}
        fontWeight={buttonFontWeight}
        className="w-[60%] justify-center items-center text-center rounded-4xl py-2 mt-10 text-lg font-semibold"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default CardPlan;

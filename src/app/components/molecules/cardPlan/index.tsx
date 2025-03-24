"use client";

import React from "react";
import { Label } from "../../atoms/label";
import Button from "../../atoms/button";
import { CheckWavesSolid } from "@mynaui/icons-react";

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
      <Label text={smallLabel} textColor={labelColor} className="text-sm" />
      <Label
        text={title}
        as="h2"
        fontWeight={700}
        textColor={textColor}
        className="text-4xl"
      />
      <div className="flex items-baseline gap-1 -mt-2">
        <Label
          text={`S/. ${price}`}
          fontWeight={600}
          textColor={textColor}
          className="text-4xl"
        />
        <span className={`text-sm font-Poppins ${textColor}`}>/Anual</span>
      </div>

      <ul className="flex flex-col gap-2 mt-6">
        <Label
          text="Beneficios:"
          textColor={textColor}
          className="flex justify-center text-xl"
          fontWeight={700}
        />
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center leading-tight gap-2.5 text-sm ${textColor}`}
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
        fontWeight={600}
        className="w-[60%] justify-center items-center text-center rounded-4xl py-2 mt-10 text-lg font-semibold"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default CardPlan;

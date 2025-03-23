"use client";

import React from "react";
import { Label } from "../../atoms/label";
import Button from "../../atoms/button";
import { FaStar, FaCheckCircle } from "react-icons/fa";

interface CardPlanProps {
    /**
    * Array of image sources for icons.
    */
    imageSrc: string[];
    
    /**
    * Small label text under the image.
    */
    smallLabel: string;

    /**
    * Title of the plan.
    */
    title: string;

    /**
    * Price of the plan.
    */
    price: string;

    /**
    * Features included in the plan.
    */
    features: string[];

    /**
    * Button text.
    */
    buttonText: string;

    /**
     * Background color of the card.
     */
    bgColor: string;

    /**
     * Color of the small label text.
     */
    labelColor: string;

    /**
     * Color of the main text (title and price).
     */
    textColor: string;

    /**
     * Background color of the button.
     */
    buttonBgColor: string;

    /**
     * Text color of the button.
     */
    buttonTextColor: string;
}

/**
 * CardPlan component represents a subscription or service plan.
 */
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
        
        <div className={`${bgColor} rounded-4xl shadow-md w-full max-w-[22rem] p-9 flex flex-col gap-4 border border-gray-200 items-center justify-center`}>
        {/* Image Section */}
        <div className="flex justify-center gap-2">
            {imageSrc.map((src, index) => (
                <img key={index} src={src} className="w-16 h-16 object-contain" />
            ))}
        </div>
        
        {/* Small Label */}
        <Label text={smallLabel} className={`${labelColor} text-xs`}/>

        {/* Plan Title */}
        <Label text={title} as="h2" className={`${textColor} text-4xl !font-bold`}/>
        
        {/* Price */}
        <div className="flex items-baseline gap-1">
            <Label 
            text={`S/. ${price}`} 
            className={`text-4xl !font-semibold ${textColor}`}/>
            <span className={`text-sm font-Poppins ${textColor}`}>/Anual</span>
        </div>

        {/* Features List */}
        <ul className="flex flex-col gap-2 mt-6">
            <li className={`!font-bold text-base !font-poppins justify-center ${textColor}`}>Beneficios:</li>
            {features.map((feature, index) => (
                <li key={index} className={`flex items-center leading-tight gap-2.5 text-sm !font-Poppins ${textColor}`}>
                    <FaCheckCircle className={`${textColor} w-4 h-auto`}/>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
                
        {/* Button */}
        <Button
        textColor={buttonTextColor}
        bgColor={buttonBgColor}
        className="w-[60%] justify-center items-center text-center rounded-4xl py-2 mt-10 text-lg !font-semibold">
            {buttonText}
        </Button>
    </div>

    
    );
};

export default CardPlan;
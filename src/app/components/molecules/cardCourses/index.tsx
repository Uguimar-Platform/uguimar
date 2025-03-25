"use client";

import React from "react";
import LabelAtom from "../../atoms/label";
import Button from "../../atoms/button";
import { FaUser, FaChartBar } from "react-icons/fa";

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

interface CardCoursesProps {
  courseImage: string;
  alt: string;
  courseName: string;
  teacher: string;
  age: string;
  price: string;
  category: string;
  courseNameFontFamily?: FontFamily;
  courseNameFontWeight?: FontWeight;
  priceFontFamily?: FontFamily;
  priceFontWeight?: FontWeight;
  categoryButtonFontFamily?: FontFamily;
  categoryButtonFontWeight?: FontWeight;
  addButtonFontFamily?: FontFamily;
  addButtonFontWeight?: FontWeight;
}

const CardCourses: React.FC<CardCoursesProps> = ({
  courseImage,
  alt,
  courseName,
  teacher,
  age,
  price,
  category,
  courseNameFontFamily = "Poppins",
  courseNameFontWeight = "bold",
  priceFontFamily = "Poppins",
  priceFontWeight = "medium",
  categoryButtonFontFamily = "Poppins",
  categoryButtonFontWeight = "medium",
  addButtonFontFamily = "Poppins",
  addButtonFontWeight = "medium",
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden w-80 shadow-md">
      <div className="relative aspect-video overflow-hidden mx-auto">
        <img
          src={courseImage}
          alt={alt}
          className="w-full h-full object-cover "
        />
      </div>

      <div className="p-4">
        <LabelAtom
          text={courseName}
          as="h3"
          className="text-xl"
          fontFamily={courseNameFontFamily}
          fontWeight={courseNameFontWeight}
        />
        <div className="flex items-center gap-3 mt-2 ml-4">
          <p className="flex items-center gap-1 text-[#7096D1]">
            <FaUser /> {teacher}
          </p>
          <p className="flex items-center gap-1 text-[#7096D1]">
            <FaChartBar /> {age}
          </p>
        </div>
        <LabelAtom
          text={`S/.${price}`}
          textColor="text-black"
          fontFamily={priceFontFamily}
          fontWeight={priceFontWeight}
        />
        <div className="flex justify-end gap-3 mt-4">
          <Button
            textColor="text-[#F9FCFF]"
            bgColor="bg-[#7096D1] hover:bg-[#334EAC]"
            className="rounded-2xl px-6"
            fontFamily={categoryButtonFontFamily}
            fontWeight={categoryButtonFontWeight}
          >
            {category}
          </Button>
          <Button
            textColor="text-[#081F5C]"
            bgColor="bg-[#D0E3FF] hover:bg-[#E7F1FF]"
            className="rounded-2xl px-8"
            fontFamily={addButtonFontFamily}
            fontWeight={addButtonFontWeight}
          >
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardCourses;

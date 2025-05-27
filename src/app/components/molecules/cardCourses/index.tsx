"use client";

import React from "react";
import LabelAtom from "../../atoms/label";
import Button from "../../atoms/button";

interface CardCoursesProps {
  courseImage: string;
  alt: string;
  courseName: string;
  teacher: string;
  age: string;
  price: string;
  category: string;
}

const CardCourses: React.FC<CardCoursesProps> = ({
  courseImage,
  alt,
  courseName,
  teacher,
  age,
  price,
  category,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden w-80 shadow-lg" : ""
      }`}
    >
      <div className="relative aspect-video overflow-hidden mx-auto">
        <img
          src={courseImage}
          alt={alt}
          className="w-full h-full object-cover "
        />
      </div>

      <div className="p-4 ml-2">
        <LabelAtom
          text={courseName}
          as="h2"
          textColor="text-black"
          fontFamily="SFProDisplay"
          fontWeight={700}
          fontSize="text-[24px]"
        />
        <div className="flex items-center gap-3 mt-2 ">
          <LabelAtom
            text={teacher}
            icon="UserCircle"
            iconPosition="left"
            as="p"
            fontFamily="SFProDisplay"
            fontWeight={500}
            fontSize="text-[16px]"
            textColor="#06356C"
          />
          <LabelAtom
            text={age}
            icon="ChartBarOne"
            iconPosition="left"
            as="p"
            fontFamily="SFProDisplay"
            fontWeight={500}
            fontSize="text-[16px]"
            textColor="#06356C"
          />
        </div>
        <LabelAtom
          text={`S/.${price}`}
          textColor="#000000"
          fontFamily="SFProDisplay"
          fontWeight={500}
          fontSize="text-[20px]"
          className="mt-2"
        />
        <div className="flex justify-between items-center mt-10">
          <Button
            disabled={true}
            textColor="#06356C"
            bgColor="#E4EFFA"
            hoverColor="#334EAC"
            className="rounded-[15px] px-4 sm:px-6 text-[14px] sm:text-[16px]"
            fontFamily="SFProDisplay"
            fontWeight={500}
            text={category}
          />
          <Button
            textColor="#06356C"
            bgColor="#A6DBF0"
            hoverColor="#E7F1FF"
            className="rounded-[15px] px-6  text-[14px] sm:text-[16px]"
            fontFamily="SFProDisplay"
            fontWeight="bold"
            text="Agregar"
          />
        </div>
      </div>
    </div>
  );
};

export default CardCourses;

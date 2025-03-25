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
    <div className="bg-white rounded-2xl overflow-hidden w-80 shadow-md">
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
          fontSize={24}
        />
        <div className="flex items-center gap-3 mt-2 ">
          <LabelAtom
            text={teacher}
            icon="UserCircle"
            iconPosition="left"
            as="p"
            fontFamily="SFProDisplay"
            fontWeight={500}
            fontSize={16}
            textColor="#334EAC"
          />
          <LabelAtom
            text={age}
            icon="ChartBarOne"
            iconPosition="left"
            as="p"
            fontFamily="SFProDisplay"
            fontWeight={500}
            fontSize={16}
            textColor="#334EAC"
          />
        </div>
        <LabelAtom
          text={`S/.${price}`}
          textColor="#000000"
          fontFamily="SFProDisplay"
          fontWeight={500}
          fontSize={20}
          className="mt-2"
        />
        <div className="flex justify-end gap-3 mt-10">
          <Button
            textColor="#F9FCFF"
            bgColor="#7096D1"
            hoverColor="#334EAC"
            className="rounded-2xl px-6"
            fontFamily="SFProDisplay"
            fontWeight={500}
          >
            {category}
          </Button>
          <Button
            textColor="#081F5C"
            bgColor="#D0E3FF"
            hoverColor="#E7F1FF"
            className="rounded-2xl px-8"
            fontFamily="SFProDisplay"
            fontWeight={700}
          >
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardCourses;

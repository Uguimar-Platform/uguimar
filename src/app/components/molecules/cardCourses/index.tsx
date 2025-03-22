"use client";

import React from "react";
import { Label } from "../../atoms/label";
import Button from "../../atoms/button";
import { FaUser, FaChartBar } from "react-icons/fa";

interface CardCoursesProps {
  /**
   * Representative image of the course.
   */
  courseImage: string;

  /**
   * Alternative description for the course image.
   */
  alt: string;

  /**
   * Course name.
   */
  courseName: string;

  /**
   * Name of the instructor teaching the course.
   */
  teacher: string;

  /**
   * Recommended age for taking the course.
   */
  age: string;

  /**
   * Course price.
   */
  price: string;

  /**
   * Category to which the course belongs.
   */
  category: string;
}

/**
 * Component that represents a course card.
 *
 * This component displays detailed information about a course, including its name,
 * image, description, instructor, recommended age, price, and category.
 */
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

      <div className="p-4">
        <Label text={courseName} as="h3" className="font-bold text-xl" />
        <div className="flex items-center gap-3 mt-2 ml-4">
          <p className="flex items-center gap-1 text-[#7096D1]">
            <FaUser /> {teacher}
          </p>
          <p className="flex items-center gap-1 text-[#7096D1]">
            <FaChartBar /> {age}
          </p>
        </div>
        <Label text={`S/.${price}`} textColor="text-black" />
        <div className="flex justify-end gap-3 mt-4">
          <Button
            textColor="text-[#F9FCFF]"
            bgColor="bg-[#7096D1] hover:bg-[#334EAC]"
            className="rounded-2xl px-6"
          >
            {category}
          </Button>
          <Button
            textColor="text-[#081F5C]"
            bgColor="bg-[#D0E3FF] hover:bg-[#E7F1FF]"
            className="rounded-2xl px-8"
          >
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardCourses;

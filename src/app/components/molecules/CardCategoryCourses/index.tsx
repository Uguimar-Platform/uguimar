import React from "react";
import Button from "../../atoms/button";
import { Label } from "../../atoms/label";

interface CardCategoryCoursesProps {
  title?: string;
  course?: string;
  description?: string;
  categorycourseimage?: string;
  buttonText?: string;
}

const CardCategoryCourses: React.FC<CardCategoryCoursesProps> = ({
  title = "",
  course = "",
  description = "",
  categorycourseimage = "",
  buttonText = "",
}) => {
  return (
    <div className="w-[380px] bg-[#F9FCFF] border border-[#334EAC] rounded-3xl p-6 py-8 shadow-md">
      <Label
        text={title}
        fontWeight={700}
        font="sfpro"
        className=" text-3xl text-left "
      />
      <Label
        text={course}
        textColor="text-[#334EAC]"
        className="text-3xl"
        fontWeight={700}
        font="sfpro"
      />
      <Label
        text={description}
        font="sfpro"
        fontWeight={400}
        className="text-gray-700 mt-2 flex text-sm"
      />
      <img
        className="w-30 mx-auto m-5 justify-center"
        src={categorycourseimage}
        alt={`${course}.webp`}
      />
      <div className="flex justify-center">
        <Button
          bgColor="bg-[#334EAC]"
          fontFamily="Onest"
          fontWeight={700}
          className=" text-white px-8 py-2 rounded-full"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CardCategoryCourses;

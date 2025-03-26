import React from "react";
import Button from "../../atoms/button";
import LabelAtom from "../../atoms/label";

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
      <LabelAtom
        text={title}
        fontWeight="bold"
        fontFamily="SFProDisplay"
        fontSize={32}
        className="text-3xl text-left"
      />
      <LabelAtom
        text={course}
        textColor="#334EAC"
        className="text-3xl mb-2"
        fontWeight="bold"
        fontFamily="SFProDisplay"
        fontSize={32}
      />
      <LabelAtom
        text={description}
        className="flex leading-tight"
        fontFamily="SFProDisplay"
        fontWeight="regular"
        textColor="#202020"
        fontSize={18}
      />
      <img
        className="w-30 mx-auto m-6 justify-center"
        src={categorycourseimage}
        alt={`${course}.webp`}
      />
      <div className="flex justify-center">
        <Button
          className="bg-[#334EAC] text-white px-16 py-2 rounded-full mt-4 "
          fontFamily="Onest"
          fontWeight={800}
          hoverColor="#263a7e"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CardCategoryCourses;

import React from "react";
import Button from "../../atoms/button";
import LabelAtom from "../../atoms/label";

interface CardCategoryCoursesProps {
  title?: string;
  course?: string;
  description?: string;
  categorycourseimage?: string;
  buttonText?: string;
  variant?: "adult" | "kid";
}

const CardCategoryCourses: React.FC<CardCategoryCoursesProps> = ({
  title = "",
  course = "",
  description = "",
  categorycourseimage = "",
  buttonText = "",
  variant = "adult",
}) => {
  const bgColor = variant === "kid" ? "#F9FCFF" : "#FFFFFF";
  const buttonColor = variant === "kid" ? "#30B9C8" : "#334EAC";

  return (
    <div
      className="w-[600px] h-auto md:h-[650px] border border-[#334EAC] rounded-[35px] p-10 flex flex-col justify-between items-center text-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col items-center text-center">
        <LabelAtom
          text={title}
          fontWeight="bold"
          fontFamily="SFProDisplay"
          fontSize="text-[22px] sm:text-[32px] md:text-[42px]"
        />
        <LabelAtom
          text={course}
          textColor="#334EAC"
          className="mt-1 md:mt-2"
          fontWeight="bold"
          fontFamily="SFProDisplay"
          fontSize="text-[22px] sm:text-[32px] md:text-[42px]"
        />
      </div>

      <div className="mt-6 mb-6 px-2">
        <LabelAtom
          text={description}
          fontFamily="SFProDisplay"
          fontWeight="regular"
          textColor="#202020"
          fontSize="text-[18px] md:text-[23px]"
          className="text-center"
        />
      </div>

      <img
        className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[186px] md:h-[186px] object-contain mx-auto"
        src={categorycourseimage}
        alt={`${course}.webp`}
      />

      <div className="flex justify-center mt-10">
        <Button
          className="px-14 py-1 rounded-full mt-4 text-[14px] sm:text-[16px] md:text-[20px]"
          fontFamily="Onest"
          fontWeight={800}
          hoverColor="#263a7e"
          text={buttonText}
          bgColor={buttonColor}
          textColor="#fff"
        />
      </div>
    </div>
  );
};

export default CardCategoryCourses;

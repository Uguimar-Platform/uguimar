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
    <div className="w-[600px] h-auto md:h-[650px] bg-[#F9FCFF] border border-[#334EAC] rounded-[35px] p-10 flex flex-col justify-center">
      <div className="justify-start items-start">
        <LabelAtom
          text={title}
          fontWeight="bold"
          fontFamily="SFProDisplay"
          fontSize="text-[22px] sm:text-[38px] md:text-[48px]"
          className="-mb-4"
        />
        <LabelAtom
          text={course}
          textColor="#334EAC"
          className="text-3xl mt-3 md:mt-0 mb-2"
          fontWeight="bold"
          fontFamily="SFProDisplay"
          fontSize="text-[22px] sm:text-[38px] md:text-[48px]"
        />
      </div>
      <LabelAtom
        text={description}
        className="flex leading-tight"
        fontFamily="SFProDisplay"
        fontWeight="regular"
        textColor="#202020"
        fontSize="text-[18px] md:text-[23px]"
      />
      <img
        className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[186px] md:h-[186px] mx-auto m-6 justify-center mt-6"
        src={categorycourseimage}
        alt={`${course}.webp`}
      />
      <div className="flex justify-center mt-10">
        <Button
          className="bg-[#334EAC] text-white px-14 py-1 rounded-full mt-4 text-[14px] sm:text-[16px] md:text-[20px]"
          fontFamily="Onest"
          fontWeight={800}
          hoverColor="#263a7e"
          text={buttonText}
        />
      </div>
    </div>
  );
};

export default CardCategoryCourses;

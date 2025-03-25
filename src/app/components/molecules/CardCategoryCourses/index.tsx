import React from "react";
import Button from "../../atoms/button";
import LabelAtom from "../../atoms/label";

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

interface CardCategoryCoursesProps {
  title?: string;
  course?: string;
  description?: string;
  categorycourseimage?: string;
  buttonText?: string;
  titleFontFamily?: FontFamily;
  titleFontWeight?: FontWeight;
  courseFontFamily?: FontFamily;
  courseFontWeight?: FontWeight;
  descriptionFontFamily?: FontFamily;
  descriptionFontWeight?: FontWeight;
  buttonFontFamily?: FontFamily;
  buttonFontWeight?: FontWeight;
}

const CardCategoryCourses: React.FC<CardCategoryCoursesProps> = ({
  title = "",
  course = "",
  description = "",
  categorycourseimage = "",
  buttonText = "",
  titleFontFamily = "SFProDisplay",
  titleFontWeight = 700,
  courseFontFamily = "SFProDisplay",
  courseFontWeight = 700,
  descriptionFontFamily = "Poppins",
  descriptionFontWeight = "regular",
  buttonFontFamily = "Poppins",
  buttonFontWeight = "medium",
}) => {
  return (
    <div className="w-[380px] bg-[#F9FCFF] border border-[#334EAC] rounded-3xl p-6 py-8 shadow-md">
      <LabelAtom
        text={title}
        fontWeight={titleFontWeight}
        fontFamily={titleFontFamily}
        className="text-3xl text-left"
      />
      <LabelAtom
        text={course}
        textColor="text-[#334EAC]"
        className="text-3xl"
        fontWeight={courseFontWeight}
        fontFamily={courseFontFamily}
      />
      <LabelAtom
        text={description}
        className="text-gray-700 mt-2 flex"
        fontFamily={descriptionFontFamily}
        fontWeight={descriptionFontWeight}
      />
      <img
        className="w-30 mx-auto m-5 justify-center"
        src={categorycourseimage}
        alt={`${course}.webp`}
      />
      <div className="flex justify-center">
        <Button
          className="bg-[#334EAC] text-white px-4 py-2 rounded-lg"
          fontFamily={buttonFontFamily}
          fontWeight={buttonFontWeight}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CardCategoryCourses;

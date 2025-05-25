import React from "react";
import LabelAtom, { FontFamily } from "../../atoms/label";

export type CarInstructorProps = {
  imageSrc: string;
  title: string;
  description: string;
  textColorTitle?: string;
  textColorDescription?: string;
  className?: string;
  style?: React.CSSProperties;
  fontFamilyTitle?: FontFamily;
  fontFamilyDescription?: FontFamily;
};

const CardInstructor: React.FC<CarInstructorProps> = ({
  imageSrc,
  title,
  description,
  textColorTitle = "#081F5C",
  textColorDescription = "#202020",
  className = "",
  style,
  fontFamilyTitle,
  fontFamilyDescription,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center md:items-start rounded-[20px] md:rounded-[40px] justify-center w-full max-w-[700px] p-4 md:p-6 ${className}`}
      style={style}
    >
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] rounded-[20px] md:rounded-[30px] object-cover"
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-4 flex-1 text-center md:text-left">
        <LabelAtom
          text={title}
          as="h2"
          textColor={textColorTitle}
          fontFamily={fontFamilyTitle}
          fontWeight="bold"
          fontSize="text-[20px] sm:text-[22px] md:text-[28px]"
          className="mb-2"
        />
        <LabelAtom
          text={description}
          as="p"
          textColor={textColorDescription}
          fontFamily={fontFamilyDescription}
          fontSize="text-[16px] sm:text-[18px] md:text-[20px]"
          fontWeight="regular"
          className="leading-6"
        />
      </div>
    </div>
  );
};

export default CardInstructor;

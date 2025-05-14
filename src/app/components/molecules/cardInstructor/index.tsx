import React from "react";
import LabelAtom from "../../atoms/label";

export type CarInstructorProps = {
  imageSrc: string;
  title: string;
  description: string;
  textColorTitle?: string;
  textColorDescription?: string;
  className?: string;
  style?: React.CSSProperties;
};

const CardInstructor: React.FC<CarInstructorProps> = ({
  imageSrc,
  title,
  description,
  textColorTitle = "#081F5C",
  textColorDescription = "#202020",
  className = "",
  style,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center rounded-[20px] md:rounded-[40px] justify-center ${className} w-[670px] h-auto md:h-[190px] p-4`}
      style={{ ...style }}
    >
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-[20px] md:rounded-[30px] object-cover"
        />
      </div>
      <div className="ml-4 flex-1 p-2 md:p-4 text-center items-center flex flex-col md:text-start md:items-start">
        <LabelAtom
          text={title}
          as="h2"
          textColor={textColorTitle}
          fontFamily="SFProDisplay"
          fontWeight="bold"
          fontSize="text-[22px] md:text-[28px]"
          className="mb-2"
        />
        <LabelAtom
          text={description}
          as="p"
          textColor={textColorDescription}
          fontFamily="SFProDisplay"
          fontSize="text-[18px] md:text-[20px]"
          fontWeight="regular"
          className="text-sm leading-6"
        />
      </div>
    </div>
  );
};

export default CardInstructor;

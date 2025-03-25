import React from "react";
import LabelAtom, { FontFamily } from "../../atoms/label";

export type CarInstructorProps = {
  imageSrc: string;
  title: string;
  description: string;
  textColor?: string;
  fontFamily?: FontFamily;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  className?: string;
  style?: React.CSSProperties;
};

export const CarInstructor: React.FC<CarInstructorProps> = ({
  imageSrc,
  title,
  description,
  textColor = "text-black",
  fontFamily = "Poppins",
  fontWeight = 400,
  className = "",
  style,
}) => {
  return (
    <div
      className={`flex items-center p-4 rounded-3xl shadow-md w-full max-w-lg ${className}`}
      style={{ ...style }}
    >
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-30 h-30 rounded-md object-cover"
        />
      </div>
      <div className="ml-4 flex-1">
        <LabelAtom
          text={title}
          as="h2"
          textColor={textColor}
          fontFamily={fontFamily}
          fontWeight={800}
          className="mb-2 uppercase"
        />
        <LabelAtom
          text={description}
          as="p"
          textColor={textColor}
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          className="text-sm"
        />
      </div>
    </div>
  );
};

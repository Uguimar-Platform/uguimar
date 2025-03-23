import React from "react";
import { Label, FontFamily } from "../../atoms/label";

/**
 * Properties for the CarInstructor component.
 * @typedef {Object} CarInstructorProps
 * @property {string} imageSrc - URL of the instructor's image.
 * @property {string} title - Title or name of the instructor.
 * @property {string} description - Description or additional information about the instructor.
 * @property {string} [textColor="text-black"] - Text color (Tailwind class).
 * @property {FontFamily} [font="poppins"] - Font family to use.
 * @property {number} [fontWeight=400] - Font weight.
 * @property {string} [className=""] - Additional CSS classes.
 * @property {React.CSSProperties} [style] - Additional inline styles.
 */
export type CarInstructorProps = {
  imageSrc: string;
  title: string;
  description: string;
  textColor?: string;
  font?: FontFamily;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Component that displays an instructor's information with their image and details.
 * 
 * @param {Object} props - The component properties.
 * @param {string} props.imageSrc - URL of the instructor's image.
 * @param {string} props.title - Title or name of the instructor.
 * @param {string} props.description - Description or additional information about the instructor.
 * @param {string} [props.textColor="text-black"] - Text color (Tailwind class).
 * @param {FontFamily} [props.font="poppins"] - Font family to use.
 * @param {number} [props.fontWeight=400] - Font weight.
 * @param {string} [props.className=""] - Additional CSS classes.
 * @param {React.CSSProperties} [props.style] - Additional inline styles.
 * @returns {JSX.Element} Rendered instructor card component.
 */
export const CarInstructor: React.FC<CarInstructorProps> = ({
  imageSrc,
  title,
  description,
  textColor = "text-black",
  font = "poppins",
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
        <Label
          text={title}
          as="h2"
          textColor={textColor}
          font={font}
          fontWeight={800}
          className="mb-2 uppercase"
        />
        <Label
          text={description}
          as="p"
          textColor={textColor}
          font={font}
          fontWeight={fontWeight}
          className="text-sm"
        />
      </div>
    </div>
  );
};

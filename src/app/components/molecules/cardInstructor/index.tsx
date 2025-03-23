import React from "react";
import { Label, FontFamily } from "../../atoms/label"; // Importamos el átomo Label
/**
 * Props for the CarInstructor component.
 */
export type CarInstructorProps = {
  /** URL or path to the instructor's image. */
  imageSrc: string;
  /** Title of the instructor card (e.g., the instructor's name). */
  title: string;
  /** Description text for the instructor (e.g., a brief bio or role). */
  description: string;
  /** Tailwind CSS class for the text color of the title and description (e.g., "text-black"). */
  textColor?: string;
  /** Font family to use for the title and description (predefined or custom). */
  font?: FontFamily;
  /** Font weight for the description (100 to 900). The title uses a fixed weight of 800. */
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  /** Additional Tailwind CSS classes to apply to the card container. */
  className?: string;
  /** Inline styles to apply to the card container (e.g., for custom colors or other CSS properties). */
  style?: React.CSSProperties;
};

/**
 * A card component to display instructor information with an image, title, and description.
 *
 * The CarInstructor component renders a card that includes an image, a title, and a description for an instructor.
 * It uses the `Label` atom to render the title and description with customizable font styles and text colors.
 * The card has a default layout with a shadow, rounded corners, and a flexible design, styled using Tailwind CSS.
 * The title is displayed in uppercase with a fixed font weight of 800, while the description's font weight is customizable.
 *
 * @example
 * ```tsx
 * import { CarInstructor } from "./CarInstructor";
 *
 * // Basic usage with default styling
 * <CarInstructor
 *   imageSrc="/instructor.jpg"
 *   title="John Doe"
 *   description="Experienced driving instructor with over 10 years of teaching."
 *   textColor="text-gray-800"
 *   font="poppins"
 *   fontWeight={400}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With custom styling
 * <CarInstructor
 *   imageSrc="/instructor.jpg"
 *   title="Jane Smith"
 *   description="Specializes in advanced driving techniques."
 *   textColor="text-blue-600"
 *   font="onest"
 *   fontWeight={500}
 *   className="bg-gray-100"
 *   style={{ border: "2px solid #e5e7eb" }}
 * />
 * ```
 *
 * @remarks
 * - This component uses Tailwind CSS for styling (e.g., `flex`, `p-4`, `rounded-3xl`, `shadow-md`).
 * - The `font` prop requires the specified font to be imported in your project (e.g., Poppins, Onest).
 * - The title is always rendered in uppercase with a font weight of 800, while the description uses the provided `fontWeight`.
 * - The image is styled with a fixed size (`w-30 h-30`) and rounded corners (`rounded-md`).
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

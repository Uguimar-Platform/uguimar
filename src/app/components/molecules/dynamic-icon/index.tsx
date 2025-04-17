import { IconCloudAtom } from "../../atoms/icon-cloud";
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

/**
 * List of slugs representing technology icons to be displayed.
 * These slugs are used to build image URLs from SimpleIcons.
 */
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

/**
 * Interface defining the properties for the DynamicIcon component.
 *
 * @interface DynamicIconProps
 * @property {string} [labelText] - The text to be displayed below the icons.
 * @property {string} [labelColor] - The color of the text in Tailwind class format.
 * @property {string} [className] - Additional CSS classes for the main container.
 * @property {string} [labelClassName] - Additional CSS classes for the Label component.
 * @property {FontFamily} [fontFamily] - The font family for the label text.
 * @property {FontWeight} [fontWeight] - The font weight for the label text.
 * @property {number} [fontSize] - The font size for the label text in pixels.
 */
interface DynamicIconProps {
  labelText?: string;
  labelColor?: string;
  className?: string;
  labelClassName?: string;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  fontSize?: number; // Font size in pixels
}

/**
 * Component that displays a cloud of technology icons with a descriptive text.
 *
 * @param {DynamicIconProps} props - The component properties.
 * @param {string} props.labelText - The text to be displayed below the icons.
 * @param {string} props.labelColor - The color of the text in Tailwind class format.
 * @param {string} props.className - Additional CSS classes for the main container.
 * @param {string} props.labelClassName - Additional CSS classes for the Label component.
 * @param {FontFamily} props.fontFamily - The font family for the label text.
 * @param {FontWeight} props.fontWeight - The font weight for the label text.
 * @param {number} props.fontSize - The font size for the label text in pixels.
 * @returns {JSX.Element} A React component that displays icons and descriptive text.
 */
export default function DynamicIcon({
  labelText = "Aprende, crece y destaca con cursos prácticos y accesibles en un solo lugar.",
  labelColor = "#081F5C",
  className = "",
  labelClassName = "text-center max-w-[400px] -mt-8 leading-6",
  fontFamily = "SFProDisplay",
  fontWeight = "medium",
  fontSize = 16, // Default font size in pixels
}: DynamicIconProps) {
  /**
   * Generates image URLs for each slug in the array.
   */
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <IconCloudAtom images={images} />
      <LabelAtom
        text={labelText}
        as="p"
        textColor={labelColor}
        className={labelClassName}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        fontSize={fontSize} 
      />
    </div>
  );
}

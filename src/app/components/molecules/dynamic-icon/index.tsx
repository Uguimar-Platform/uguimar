import { IconCloudAtom } from "../../atoms/icon-cloud";
import LabelAtom, { LabelAtomProps } from "../../atoms/label";

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

interface DynamicIconProps {
  labelText?: string;
  labelColor?: string;
  className?: string;
  labelClassName?: string;
  labelProps?: Partial<LabelAtomProps>;
  customSlugs?: string[];
  cloudSize?: {
    width?: number;
    height?: number;
    className?: string;
  };
}

export default function DynamicIcon({
  labelText = "Aprende, crece y destaca con cursos prácticos y accesibles en un solo lugar.",
  labelColor = "#081F5C",
  className = "",
  labelClassName = "text-center max-w-[400px] -mt-8 leading-6",
  labelProps = {},
  customSlugs,
  cloudSize = {
    width: 400,
    height: 400,
    className: "w-full h-full max-w-[400px] max-h-[400px]",
  },
}: DynamicIconProps) {
  const images = (customSlugs || slugs).map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={cloudSize.className}>
        <IconCloudAtom
          images={images}
          width={cloudSize.width}
          height={cloudSize.height}
        />
      </div>
      <LabelAtom
        text={labelText}
        as="p"
        textColor={labelColor}
        className={labelClassName}
        {...labelProps}
      />
    </div>
  );
}

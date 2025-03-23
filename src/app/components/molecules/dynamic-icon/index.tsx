import { IconCloud } from "../../atoms/icon-cloud";
import { Label } from "../../atoms/label";

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
}

export default function DynamicIcon({
  labelText = "Aprende, crece y destaca con cursos prácticos y accesibles en un solo lugar.",
  labelColor = "text-[#081F5C]",
  className = "",
  labelClassName = "text-center max-w-[400px] -mt-8 text-xl leading-6",
}: DynamicIconProps) {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <IconCloud images={images} />
      <Label
        text={labelText}
        as="p"
        textColor={labelColor}
        className={labelClassName}
      />
    </div>
  );
}

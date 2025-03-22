"use client";

import React from "react";
import { IconCloud } from "./components/cloud-component";

/**
 * Default list of technology identifiers used for the icon cloud.
 * These slugs are used to generate URLs for the Simple Icons CDN.
 */
const DEFAULT_TECH_SLUGS = [
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

interface IconCloudAtomProps {
  /**
   * Optional list of custom image URLs to display in the cloud.
   * If not provided, default tech icons will be used.
   */
  imageUrls?: string[];
}

/**
 * A 3D interactive cloud of technology icons that rotates automatically
 * and can be manipulated through mouse interaction.
 */
const IconCloudAtom = ({ imageUrls }: IconCloudAtomProps) => {
  // Generate the image URLs from slugs if no custom images provided
  const images = imageUrls?.length
    ? imageUrls
    : DEFAULT_TECH_SLUGS.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
      );

  return (
    <div className="flex flex-col items-center">
      <IconCloud images={images} />
      <p className="text-[#081F5C] text-center max-w-[400px] -mt-8 text-xl leading-6">
        Aprende, crece y destaca con cursos prácticos y accesibles en un solo
        lugar.
      </p>
    </div>
  );
};

export default IconCloudAtom;

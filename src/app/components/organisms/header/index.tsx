"use client";
import React from "react";
import Dropdown from "../../atoms/dropdown";
import NavigationMenu from "../../molecules/navigation-menu";
import Button from "../../atoms/button";

/**
 * Options for the dropdown menu in the Header component.
 */
const dropdownOptions = [
  { id: "adult", name: "Adulto (+18 años)" },
  { id: "teen", name: "Adolescente (13-17 años)" },
  { id: "child", name: "Niño (menor de 13 años)" },
];

/**
 * A header component that combines a logo, dropdown, navigation menu, and action buttons.
 *
 * The Header component renders a responsive header layout for a website, featuring a logo, a dropdown menu,
 * a navigation menu, and two action buttons (for login and registration). It uses Tailwind CSS for styling
 * and is designed to be centered with a maximum width. The component includes a logo on the left, a dropdown
 * for selecting user types, a navigation menu in the center, and login/registration buttons on the right.
 * The `"use client"` directive ensures client-side interactivity for the dropdown and buttons.
 *
 * @example
 * ```tsx
 * import Header from "./Header";
 *
 * // Basic usage in a page layout
 * <Header />
 * ```
 *
 * @remarks
 * - This component uses Tailwind CSS for styling (e.g., `flex`, `items-center`, `justify-between`, `max-w-[1300px]`).
 * - The `"use client"` directive is required for client-side interactivity (e.g., dropdown functionality, button clicks).
 * - The logo image (`/LogoRight.svg`) should be available in the public directory of your Next.js project.
 * - The `Dropdown`, `NavigationMenu`, and `Button` components must be properly defined and imported.
 * - Accessibility can be improved by adding `aria-label` to the header and ensuring the navigation menu is keyboard-accessible.
 */
const Header: React.FC = () => {
  return (
    <header className="mt-4 flex items-center justify-between max-w-[1300px] mx-auto">
      {/* Left Section: Icon and Dropdown */}
      <div className="flex items-center gap-4">
        {/* Placeholder for the icon (you can replace this with an actual icon component) */}
        <div className="relative">
          <img
            src="/LogoRight.svg"
            alt="Logo UGuímar"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <Dropdown
          options={dropdownOptions}
          className="bg-white border border-[#334EAC] text-black rounded-full px-4 py-2"
        />
      </div>
      <NavigationMenu />
      <div className="flex gap-4">
        <Button
          bgColor="bg-[#334EAC]"
          textColor="text-white"
          hoverColor="hover:bg-[#7096D1]"
          className="border border-[#334EAC] rounded-full px-6 py-2"
        >
          Iniciar sesión
        </Button>
        <Button
          bgColor="bg-[#334EAC]"
          textColor="text-white"
          hoverColor="hover:bg-[#7096D1]"
          className="rounded-full px-10 py-2"
        >
          Registro
        </Button>
      </div>
    </header>
  );
};

export default Header;

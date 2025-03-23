"use client";

import React from "react";
import LinkAtom from "../../atoms/links";

/**
 * Main navigation menu component.
 *
 * This component renders a horizontal navigation menu with links
 * to different sections of the application.
 *
 * @returns A navigation component with styled links.
 */
const NavigationMenu: React.FC = () => {
  /**
   * Array of menu items with their labels and corresponding routes.
   * @type {Array<{label: string, route: string}>}
   */
  const menuItems = [
    { label: "Inicio", route: "/" },
    { label: "Cursos", route: "/cursos" },
    { label: "Planes", route: "/planes" },
    { label: "FAQ", route: "/faq" },
    { label: "Rutas", route: "/rutas" },
    { label: "Feedback", route: "/feedback" },
  ];

  return (
    <nav className="max-w-[1200px] mx-auto bg-[#F9FCFF] rounded-full border border-[#334EAC] px-6 flex justify-center">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="hover:bg-[#7096D1] hover:text-white rounded-full px-8 py-1 font-medium font-['Onest'] flex items-center h-full"
        >
          <LinkAtom
            label={item.label}
            to={item.route}
            className="text-[15px]"
          />
        </li>
      ))}
    </nav>
  );
};

export default NavigationMenu;

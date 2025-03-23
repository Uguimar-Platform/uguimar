"use client"; // Important for interactive components in Next.js

import React from "react";
import LinkAtom from "../../atoms/links";

/**
 * NavigationMenu
 *
 * This component represents the main navigation menu of the application.
 * It displays a list of links to different sections of the app.
 *
 * @component
 * @example
 * <NavigationMenu />
 */
const NavigationMenu: React.FC = () => {
  /**
   * List of menu items displayed in the navigation menu.
   * Each item contains a label and a route.
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

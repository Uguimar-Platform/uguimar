"use client";

import React from "react";

import ButtonAtom from "../../atoms/button-nav";

/**
 * Header Navigation Component
 *
 * This component represents the main navigation header of the application.
 * It displays a logo, navigation links, and authentication buttons.
 *
 * @component
 * @example
 * <Header />
 */
const Header: React.FC = () => {
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
    <header className="bg-[#F9FCFF] py-4 px-4 md:px-8">
    <div className="max-w-[1200px] mx-auto flex items-center justify-between">
      {/* Selector de Edad */}
      <div className="flex items-center">
        <div>
          <select className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 bg-white text-gray-700 appearance-none">
            <option value="adult">Adulto (+18 años)</option>
            <option value="teen">Adolescente</option>
            <option value="child">Niño</option>
          </select>
        </div>
      </div>
  
      {/* Menú de Navegación */}
      <nav className="hidden md:block">
        <ul className="flex bg-white rounded-full border border-gray-200 px-2 py-1">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:bg-[#dae7ff] rounded-full mx-1">
              <a 
                href={item.route} 
                className="px-4 py-2 text-sm font-medium block rounded-full text-gray-700 hover:text-[#0d0d0e]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
        {/* Auth Buttons */}
        <div className="flex items-center space-x-2 ">
          <ButtonAtom label="Iniciar sesión" variant="secondary" />
          <ButtonAtom label="Registro" variant="primary" />
        </div>
        
        {/* Mobile Menu Button - Only visible on small screens */}
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
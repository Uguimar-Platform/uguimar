"use client";

import LinkAtom from "../../atoms/links";
import { Menu, X } from "@mynaui/icons-react";
import { useState } from "react";

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
interface NavigationMenuProps {
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  fontFamily = "Onest",
  fontWeight = "medium",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", route: "/" },
    { label: "Cursos", route: "/cursos" },
    { label: "Planes", route: "/planes" },
    { label: "FAQ", route: "/faq" },
    { label: "Rutas", route: "/rutas" },
    { label: "Feedback", route: "/feedback" },
  ];

  return (
    <>
      <div className="md:hidden mb-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} color="#334EAC" />
          ) : (
            <Menu size={24} color="#334EAC" />
          )}
        </button>
      </div>

      <nav className="hidden md:flex max-w-[1200px] mx-auto bg-[#F9FCFF] rounded-full border border-[#334EAC] px-6 justify-center">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="hover:bg-[#7096D1] hover:text-white rounded-full px-8 py-1 font-medium font-['Onest'] flex items-center h-full"
          >
            <LinkAtom
              label={item.label}
              to={item.route}
              className="text-[15px]"
              fontFamily={fontFamily}
              fontWeight={fontWeight}
            />
          </li>
        ))}
      </nav>

      {isMenuOpen && (
        <nav className="md:hidden w-full bg-[#F9FCFF] border border-[#334EAC] rounded-xl py-4 flex flex-col items-center gap-2 shadow-lg z-50">
          {menuItems.map((item, index) => (
            <ul
              key={index}
              className="w-full text-center py-2 hover:bg-[#7096D1] hover:text-white rounded-md transition-colors"
            >
              <LinkAtom
                label={item.label}
                to={item.route}
                className="text-base"
                fontFamily={fontFamily}
                fontWeight={fontWeight}
              />
            </ul>
          ))}
        </nav>
      )}
    </>
  );
};

export default NavigationMenu;

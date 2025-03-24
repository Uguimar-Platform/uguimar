"use client";
import React from "react";
import Dropdown from "../../atoms/dropdown";
import NavigationMenu from "../../molecules/navigation-menu";
import Button from "../../atoms/button";

const dropdownOptions = [
  { id: "adult", name: "Adulto (+18 años)" },
  { id: "teen", name: "Adolescente (13-17 años)" },
  { id: "child", name: "Niño (menor de 13 años)" },
];

const Header: React.FC = () => {
  return (
    <header className="mt-8 flex items-center justify-between max-w-[1500px] mx-auto">
      <div className="flex items-center gap-4">
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
          fontFamily="Onest"
          fontWeight={600}
        >
          Iniciar sesión
        </Button>
        <Button
          bgColor="bg-[#334EAC]"
          textColor="text-white"
          hoverColor="hover:bg-[#7096D1]"
          className="rounded-full px-10 py-2"
          fontFamily="Onest"
          fontWeight={600}
        >
          Registro
        </Button>
      </div>
    </header>
  );
};

export default Header;

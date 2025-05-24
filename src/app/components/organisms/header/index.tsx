"use client";
import React from "react";
import NavigationMenu from "../../molecules/navigation-menu";
import Button from "../../atoms/button";

const dropdownOptions = [
  { id: "adultos", name: "Adulto (+18 años)" },
  { id: "jovenes", name: "Adolescente (13-17 años)" },
  { id: "ninos", name: "Niño (menor de 13 años)" },
];

interface HeaderProps {
  onChangeGroup: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onChangeGroup }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    onChangeGroup(selectedId);
  };

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

        {/* Select estilizado como el Dropdown original */}
        <select
          onChange={handleChange}
          className="rounded-full border border-[#334EAC] px-4 py-2 text-sm text-[#334EAC] bg-white focus:outline-none focus:ring-2 focus:ring-[#7096D1]"
        >
          {dropdownOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <NavigationMenu />

      <div className="flex gap-4">
        <Button
          bgColor="#334EAC"
          textColor="#FFFFFF"
          hoverColor="#7096D1"
          className="border border-[#334EAC] rounded-full px-6 py-2"
          fontFamily="Onest"
          fontWeight={600}
          text="Iniciar sesión"
        />
        <Button
          bgColor="#334EAC"
          textColor="#FFFFFF"
          hoverColor="#7096D1"
          className="rounded-full px-10 py-2"
          fontFamily="Onest"
          fontWeight={600}
          text="Registro"
        />
      </div>
    </header>
  );
};

export default Header;

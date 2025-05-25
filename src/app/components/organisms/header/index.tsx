"use client";
import React, { createContext, useContext, useState } from "react";
import Dropdown from "../../atoms/dropdown";
import NavigationMenu from "../../molecules/navigation-menu";
import Button from "../../atoms/button";
import { Menu, X } from "lucide-react";

interface UserTypeContextType {
  userType: string;
  setUserType: (type: string) => void;
}

const defaultUserType = "adult";

export const UserTypeContext = createContext<UserTypeContextType>({
  userType: defaultUserType,
  setUserType: () => {},
});

export const useUserType = () => {
  const context = useContext(UserTypeContext);
  if (!context) {
    throw new Error("useUserType must be used within a UserTypeProvider");
  }
  return context;
};

const dropdownOptions = [
  { id: "adult", name: "👨 Adulto (+18 años)" },
  { id: "teen", name: "🧑 Adolescente (13-17 años)" },
  { id: "child", name: "🧒 Niño (menor de 13 años)" },
];

export const UserTypeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userType, setUserType] = useState(defaultUserType);
  const contextValue = React.useMemo(
    () => ({ userType, setUserType }),
    [userType]
  );
  return (
    <UserTypeContext.Provider value={contextValue}>
      {children}
    </UserTypeContext.Provider>
  );
};

const Header: React.FC = () => {
  const { userType, setUserType } = useUserType();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleUserTypeChange = (selectedType: string) => {
    setUserType(selectedType);
  };

  return (
    <header className="sticky top-2 z-50 w-full px-10 py-3 md:px-0">
      <div className="flex items-center justify-between max-w-[1500px] mx-auto">
        {/* Logo */}
        <img
          src="/LogoRight.svg"
          alt="Logo UGuímar"
          width={40}
          height={40}
          className="object-contain mx-5"
        />

        {/* Mobile/Tablet Layout */}
        <div className="flex items-center gap-3 xl:hidden">
          <Dropdown
            options={dropdownOptions}
            defaultOption={userType}
            onChange={handleUserTypeChange}
          />
          <button
            className="border border-[#334EAC] rounded-full p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={20} color="#334EAC" />
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden xl:flex items-center justify-between w-full">
          <Dropdown
            options={dropdownOptions}
            defaultOption={userType}
            onChange={handleUserTypeChange}
          />
          <NavigationMenu />
          <div className="flex gap-4">
            <Button
              bgColor="#334EAC"
              textColor="#FFFFFF"
              hoverColor="#7096D1"
              className="rounded-full w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2"
              fontFamily="Onest"
              fontWeight={600}
              text="Iniciar sesión"
            />
            <Button
              bgColor="#334EAC"
              textColor="#FFFFFF"
              hoverColor="#7096D1"
              className="rounded-full w-full sm:w-auto text-sm sm:text-base px-4 sm:px-10 py-2 sm:py-2"
              fontFamily="Onest"
              fontWeight={600}
              text="Registro"
            />
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 px-6 py-4 overflow-y-auto transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <img
              src="/LogoRight.svg"
              alt="Logo UGuímar"
              width={40}
              height={40}
              className="object-contain"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#334EAC] rounded-full p-2"
            >
              <X size={24} />
            </button>
          </div>

          <NavigationMenu direction="vertical" />

          <div className="flex flex-col gap-4 mt-6">
            <Button
              bgColor="#334EAC"
              textColor="#FFFFFF"
              hoverColor="#7096D1"
              className="rounded-full w-full py-2"
              fontFamily="Onest"
              fontWeight={600}
              text="Iniciar sesión"
            />
            <Button
              bgColor="#334EAC"
              textColor="#FFFFFF"
              hoverColor="#7096D1"
              className="rounded-full w-full py-2"
              fontFamily="Onest"
              fontWeight={600}
              text="Registro"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

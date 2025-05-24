"use client";
import React, { createContext, useContext, useState } from "react";
import Dropdown from "../../atoms/dropdown";
import NavigationMenu from "../../molecules/navigation-menu";
import Button from "../../atoms/button";

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
  { id: "adult", name: "Adulto (+18 años)" },
  { id: "teen", name: "Adolescente (13-17 años)" },
  { id: "child", name: "Niño (menor de 13 años)" },
];

export const UserTypeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userType, setUserType] = useState(defaultUserType);

  const contextValue = React.useMemo(() => ({ userType, setUserType }), [userType]);

  return <UserTypeContext.Provider value={contextValue}>{children}</UserTypeContext.Provider>;
};

const Header: React.FC = () => {
  const { userType, setUserType } = useUserType();

  const handleUserTypeChange = (selectedType: string) => {
    setUserType(selectedType);
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
        <Dropdown
          options={dropdownOptions}
          defaultOption={userType}
          onChange={handleUserTypeChange}
        />
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

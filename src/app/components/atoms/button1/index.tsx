"use client";

import React from "react";

interface ButtonProps {
  label: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
}

const ButtonAtom: React.FC<ButtonProps> = ({ label, variant, onClick }) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium block rounded-full ${
        variant === "primary"
          ? "bg-[#334EAC] text-white hover:bg-[#2a3f8a] cursor-pointer"
          : "bg-[#E6ECF8] text-[#334EAC] hover:bg-[#d0dcf1] cursor-pointer"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonAtom;
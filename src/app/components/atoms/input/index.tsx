"use client";
import React from "react";

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

interface InputAtomProps {
  type?: string;
  placeholder?: string;
  name: string;
  value?: string;
  colorBG?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
}

const InputAtom: React.FC<InputAtomProps> = ({
  type = "text",
  placeholder = "",
  name,
  value,
  colorBG = "#E7F1FF",
  onChange,
  onBlur,
  className = "",
  fontFamily = "Poppins",
  fontWeight = "regular",
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`rounded-md px-3 py-2 focus:outline-none ${className}`}
        style={{
          fontFamily: fontFamily,
          fontWeight: fontWeight,
          backgroundColor: colorBG,
        }}
      />
    </div>
  );
};

export default InputAtom;

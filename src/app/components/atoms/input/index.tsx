"use client";
import React from "react";

type FontFamily = "Poppins" | "Onest" | "SFProDisplay";
type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

interface InputAtomProps {
  type?: string;
  placeholder?: string;
  name: string;
  value?: string;
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
  onChange,
  onBlur,
  className = "",
  fontFamily = "SFProDisplay",
  fontWeight = 400,
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
        }}
      />
    </div>
  );
};

export default InputAtom;

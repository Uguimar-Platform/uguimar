"use client";
import React from "react";

interface InputAtomProps {
  type?: string;
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

const InputAtom: React.FC<InputAtomProps> = ({
  type = "text",
  placeholder = "",
  name,
  value,
  onChange,
  onBlur,
  className = "",
  style,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`rounded-md px-3 py-2 focus:outline-none ${className}`}
        style={style}
      />
    </div>
  );
};

export default InputAtom;

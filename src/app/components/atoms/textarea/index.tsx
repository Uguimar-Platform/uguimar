"use client";
import React from "react";

interface TextAreaAtomProps {
  placeholder?: string;
  name: string;
  value?: string;
  colorBG?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  rows?: number;
  cols?: number;
  maxLength?: number;
  height?: string | number;
}

const TextAreaAtom: React.FC<TextAreaAtomProps> = ({
  placeholder = "",
  name,
  value,
  colorBG = "#E7F1FF",
  onChange,
  onBlur,
  className = "",
  maxLength,
  height,
}) => {
  return (
    <div className="relative">
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
        className={`rounded-md px-3 py-2 focus:outline-none ${className}`}
        style={{
          fontFamily: "SFProDisplay",
          fontWeight: "regular",
          backgroundColor: colorBG,
          resize: "none",
          height: height,
        }}
      />
    </div>
  );
};

export default TextAreaAtom;

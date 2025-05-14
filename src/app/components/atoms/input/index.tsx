"use client";
import React, { forwardRef } from "react";

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
type InputType = "text" | "email" | "password" | "number" | "date";

interface InputAtomProps {
  type?: InputType;
  placeholder?: string;
  name: string;
  value?: string;
  colorBG?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  autoComplete?: string;
}

const InputAtom = forwardRef<HTMLInputElement, InputAtomProps>(
  (
    {
      type = "text",
      placeholder = "",
      name,
      value,
      colorBG = "#E7F1FF",
      onChange,
      onBlur,
      onKeyDown,
      className = "",
      fontFamily = "Poppins",
      fontWeight = "regular",
      disabled = false,
      readOnly = false,
      maxLength,
      autoComplete,
    },
    ref
  ) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          className={`rounded-md px-3 py-2 focus:outline-none ${className}`}
          style={{
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            backgroundColor: colorBG,
          }}
          disabled={disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          autoComplete={autoComplete}
        />
      </div>
    );
  }
);

InputAtom.displayName = "InputAtom";

export default InputAtom;

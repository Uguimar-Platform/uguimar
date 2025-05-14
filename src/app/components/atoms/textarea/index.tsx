"use client";
import React, { useEffect, useRef } from "react";

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
  fullWidth?: boolean;
  autoResize?: boolean;
  minHeight?: string | number;
  maxHeight?: string | number;
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
  fullWidth = false,
  autoResize = false,
  minHeight = "100px",
  maxHeight = "400px",
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    if (textareaRef.current && autoResize) {
      textareaRef.current.style.height = "auto";
      const newHeight = Math.min(
        Math.max(textareaRef.current.scrollHeight, Number(minHeight)),
        Number(maxHeight)
      );
      textareaRef.current.style.height = `${newHeight}px`;
    }
  };

  useEffect(() => {
    if (autoResize) {
      adjustHeight();
    }
  }, [value, autoResize]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (autoResize) {
      adjustHeight();
    }
    onChange?.(e);
  };

  return (
    <div className={`relative ${fullWidth ? "w-full" : ""}`}>
      <textarea
        ref={textareaRef}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        maxLength={maxLength}
        className={`rounded-md px-3 py-2 focus:outline-none ${className}`}
        style={{
          fontFamily: "SFProDisplay",
          fontWeight: "regular",
          backgroundColor: colorBG,
          resize: autoResize ? "none" : "vertical",
          height: autoResize ? "auto" : height,
          minHeight: autoResize ? minHeight : undefined,
          maxHeight: autoResize ? maxHeight : undefined,
          width: fullWidth ? "100%" : undefined,
        }}
      />
    </div>
  );
};

export default TextAreaAtom;

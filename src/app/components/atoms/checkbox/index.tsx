"use client";
import React from "react";

interface CheckboxProps {
  label?: string;
  disabled?: boolean;
  color?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label = "",
  disabled = false,
  color = "text-[#081F5C]",
}) => {
  const id = React.useMemo(
    () => "checkbox-" + Math.random().toString(36).slice(2, 11),
    []
  );
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 cursor-pointer py-2 px-2 m-2 ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        className="w-4 h-4 accent-[#334EAC] rounded"
      />
      <span className={`${color} font-poppins`}>{label}</span>
    </label>
  );
};

export default Checkbox;

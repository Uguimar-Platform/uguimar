import React from "react";

interface CheckboxProps {
  label?: string;
  disabled?: boolean;
  color?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label = "",
  disabled = false,
  color = "blue-dark",
}) => {
  const id = React.useMemo(
    () => "checkbox-" + Math.random().toString(36).slice(2, 11),
    []
  );

  const getTextColorClass = (): string => {
    switch (color) {
      case "blue-dark":
        return "text-[#081F5C]";
      case "blue-medium":
        return "text-[#334EAC]";
      case "blue-light":
        return "text-[#7098D1]";
      case "blue-lightest":
        return "text-[#D0E3FF]";
      case "blue-lighter":
        return "text-[#E7F1FF]";
      case "blue-faint":
        return "text-[#F9FCFF]";
      case "grey-light":
        return "text-[#E7E7E7]";
      default:
        return "text-[#081F5C]";
    }
  };

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
      <span className={`${getTextColorClass()} font-poppins`}>{label}</span>
    </label>
  );
};

export default Checkbox;

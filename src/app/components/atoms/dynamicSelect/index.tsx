import React, { useEffect, useState, useRef } from "react";
import LabelAtom, { LabelAtomProps } from "../label";

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

interface Item {
  value: string | number;
  content: string;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  group?: string;
}

interface DynamicSelectAtomProps {
  label: string;
  items: Item[];
  value?: string | number;
  onInputChange: (value: string) => void;
  onValueChange: (value: string | number) => void;
  labelProps?: Omit<LabelAtomProps, "text" | "htmlFor">;
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
  dropdownClassName?: string;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  textSize?: "xs" | "sm" | "base" | "lg";
  fullWidth?: boolean;
}

const DynamicSelectAtom: React.FC<DynamicSelectAtomProps> = ({
  label,
  items,
  value,
  onInputChange,
  onValueChange,
  labelProps,
  placeholder = `Selecciona ${label.toLowerCase()}`,
  emptyMessage = "No hay opciones disponibles",
  className = "",
  dropdownClassName = "",
  fontFamily = "Onest",
  fontWeight = 400,
  textSize = "base",
  fullWidth = false,
}) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [inputValue, setInputValue] = useState<string>(value?.toString() ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const inputId = `dynamic-select-${label.toLowerCase().replace(/\s+/g, "-")}`;

  const textSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };

  useEffect(() => {
    setInputValue(value?.toString() ?? "");
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInputChange(newValue);

    const newItems = items.filter((item) =>
      item.content.toLowerCase().includes(newValue.toLowerCase())
    );
    setFilteredItems(newItems);
  };

  const groupedItems = filteredItems.reduce(
    (acc, item) => {
      const group = item.group || "Sin grupo";
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(item);
      return acc;
    },
    {} as Record<string, Item[]>
  );

  return (
    <div
      className={`relative ${fullWidth ? "w-full" : ""} ${className}`}
      ref={componentRef}
    >
      <LabelAtom
        text={label}
        htmlFor={inputId}
        textColor="text-gray-700"
        fontFamily="Poppins"
        fontWeight={500}
        className="block mb-2"
        {...labelProps}
      />
      <input
        type="text"
        id={inputId}
        className={`border border-[#334EAC] bg-white rounded-full px-3 py-2 w-full ${textSizeClasses[textSize]}`}
        value={inputValue}
        onFocus={() => setIsOpen(true)}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={{
          fontFamily: fontFamily,
          fontWeight: fontWeight,
        }}
      />
      {isOpen && (
        <div
          className={`absolute bg-white border border-gray-300 rounded mt-1 w-full max-h-60 overflow-y-auto z-10 transform ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          } ${dropdownClassName}`}
          style={{
            fontFamily: fontFamily,
            fontWeight: fontWeight,
          }}
        >
          {Object.keys(groupedItems).length > 0 ? (
            Object.entries(groupedItems).map(([group, items]) => (
              <div key={group}>
                {group !== "Sin grupo" && (
                  <div className="px-3 py-2 bg-gray-100 font-semibold text-gray-700 sticky top-0">
                    {group}
                  </div>
                )}
                {items.map((item) => (
                  <div
                    key={item.value.toString()}
                    className={`${textSizeClasses[textSize]} px-3 py-2 hover:bg-gray-200 cursor-pointer`}
                    onClick={() => {
                      setInputValue(item.content);
                      onValueChange(item.value);
                      setIsOpen(false);
                    }}
                  >
                    {item.content}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div
              className={`px-3 py-2 text-gray-500 ${textSizeClasses[textSize]}`}
            >
              {emptyMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DynamicSelectAtom;

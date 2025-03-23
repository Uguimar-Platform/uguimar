import React, { useEffect, useState, useRef } from "react";
import { Label, LabelProps } from "../label";

interface Item {
  value: string | number;
  content: string;
}

interface DynamicSelectProps {
  label: string;
  items: Item[];
  value?: string | number;
  onInputChange: (value: string) => void;
  onValueChange: (value: string | number) => void;
  labelProps?: Omit<LabelProps, "text" | "htmlFor">;
}

const DynamicSelect: React.FC<DynamicSelectProps> = ({
  label,
  items,
  value,
  onInputChange,
  onValueChange,
  labelProps,
}) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [inputValue, setInputValue] = useState<string>(value?.toString() ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const inputId = `dynamic-select-${label.toLowerCase().replace(/\s+/g, "-")}`;

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

  return (
    <div className="relative" ref={componentRef}>
      <Label
        text={label}
        htmlFor={inputId}
        textColor="text-gray-700"
        font="poppins"
        fontWeight={500}
        className="block mb-2"
        {...labelProps}
      />
      <input
        type="text"
        id={inputId}
        className="border border-gray-300 rounded px-3 py-2 w-full"
        value={inputValue}
        onFocus={() => setIsOpen(true)}
        onChange={handleInputChange}
        placeholder={`Selecciona ${label.toLowerCase()}`}
      />
      {isOpen && (
        <div className="absolute bg-white border border-gray-300 rounded mt-1 w-full max-h-40 overflow-y-auto z-10">
          {filteredItems.map((item) => (
            <div
              key={item.value.toString()}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
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
      )}
    </div>
  );
};

export default DynamicSelect;

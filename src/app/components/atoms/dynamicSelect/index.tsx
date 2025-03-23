import React, { useEffect, useState, useRef } from "react";
import { Label, LabelProps } from "../label";

/**
 * Interface that defines the structure of an item in the dropdown list.
 * @interface Item
 * @property {string | number} value The unique value that identifies the item.
 * @property {string} content The text that will be displayed in the user interface.
 */
interface Item {
  value: string | number;
  content: string;
}

/**
 * Properties for the DynamicSelect component.
 * @interface DynamicSelectProps
 * @property {string} label Label to be displayed above the selector.
 * @property {Item[]} items List of available items to select from.
 * @property {string | number} [value] Currently selected value (optional).
 * @property {function} onInputChange Function that executes when the input text changes.
 * @property {function} onValueChange Function that executes when a new value is selected.
 * @property {Omit<LabelProps, "text" | "htmlFor">} [labelProps] Additional properties for the Label component (optional).
 */
interface DynamicSelectProps {
  label: string;
  items: Item[];
  value?: string | number;
  onInputChange: (value: string) => void;
  onValueChange: (value: string | number) => void;
  labelProps?: Omit<LabelProps, "text" | "htmlFor">;
}

/**
 * Dynamic selection component that allows searching and selecting items from a list.
 * Provides autocomplete and filtering functionality as the user types.
 *
 * @param {DynamicSelectProps} props The component properties.
 * @returns {JSX.Element} The rendered DynamicSelect component.
 */
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

  /**
   * Effect that updates the input value when the value prop changes.
   */
  useEffect(() => {
    setInputValue(value?.toString() ?? "");
  }, [value]);

  /**
   * Effect that handles clicks outside the component to close the dropdown menu.
   * Adds and removes event listeners to detect clicks outside the component.
   */
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

  /**
   * Handles changes in the text input.
   * Updates the input value, notifies the parent component, and filters the items.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e The input change event.
   */
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

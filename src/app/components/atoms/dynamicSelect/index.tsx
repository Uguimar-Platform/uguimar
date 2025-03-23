import React, { useEffect, useState, useRef } from "react";
import { Label, LabelProps } from "../label";

/**
 * Props for each item in the DynamicSelect dropdown.
 */
interface Item {
  /** Unique identifier for the item. */
  value: string | number;
  /** Display text for the item in the dropdown. */
  content: string;
}

/**
 * Props for the DynamicSelect component.
 */
interface DynamicSelectProps {
  /** Text to display in the label above the input field. */
  label: string;
  /** List of items to display in the dropdown. */
  items: Item[];
  /** Controlled value of the input field (optional). */
  value?: string | number;
  /** Callback triggered when the input value changes. */
  onInputChange: (value: string) => void;
  /** Callback triggered when an item is selected from the dropdown. */
  onValueChange: (value: string | number) => void;
  /** Additional props to customize the Label component (excluding `text` and `htmlFor`). */
  labelProps?: Omit<LabelProps, "text" | "htmlFor">;
}

/**
 * A controlled autocomplete input component with a dropdown.
 * 
 * The DynamicSelect component provides an input field with autocomplete functionality.
 * As the user types, it filters a list of items and displays matching options in a dropdown menu.
 * The user can select an option to update the input value and trigger the `onValueChange` callback.
 * It uses the `Label` component for a customizable label and Tailwind CSS for styling.
 * 
 * @example
 * ```tsx
 * // Example with static data
 * const staticItems = [
 *   { value: "1", content: "React" },
 *   { value: "2", content: "Angular" },
 *   { value: "3", content: "Vue" },
 * ];
 * 
 * <DynamicSelect
 *   label="Framework"
 *   items={staticItems}
 *   value={selectedValue}
 *   onInputChange={(value) => setInputValue(value)}
 *   onValueChange={(value) => setSelectedValue(value)}
 *   labelProps={{
 *     textColor: "text-blue-600",
 *     font: "onest",
 *     fontWeight: 600,
 *   }}
 * />
 * ```
 * 
 * @remarks
 * - This component uses Tailwind CSS for styling.
 * - The `Label` component may require specific fonts (e.g., Poppins, Onest) to be imported in your project.
 * - The dropdown closes when clicking outside the component or selecting an option.
 * - Accessibility is improved by associating the label with the input via `htmlFor` and `id`.
 */
const DynamicSelect: React.FC<DynamicSelectProps> = ({
  label,
  items,
  value,
  onInputChange,
  onValueChange,
  labelProps,
}) => {
  // State to store the filtered items based on the input value
  const [filteredItems, setFilteredItems] = useState(items);
  // State to store the current input value, initialized with the controlled value or empty string
  const [inputValue, setInputValue] = useState<string>(
    value?.toString() ?? ""
  );
  // State to control the visibility of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);
  // Ref to track the component's DOM node for click-outside detection
  const componentRef = useRef<HTMLDivElement>(null);
  // Generate a unique ID for accessibility (associating label with input)
  const inputId = `dynamic-select-${label.toLowerCase().replace(/\s+/g, "-")}`;

  // Synchronize the internal input value with the controlled value if it changes externally
  useEffect(() => {
    setInputValue(value?.toString() ?? "");
  }, [value]);

  // Add an event listener to close the dropdown when clicking outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle input changes: update the input value, trigger the onInputChange callback, and filter items
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInputChange(newValue);

    // Filter items based on the input value (case-insensitive)
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
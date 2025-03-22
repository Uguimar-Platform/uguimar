"use client";

import React, { useState } from "react";

const DynamicSelect: React.FC = () => {
  const options = ["React", "Angular", "Vue", "Svelte", "Solid", "Next.js", "Nuxt.js"];
  const [text, setText] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);

    if (value.trim() === "") {
      setFilteredOptions([]);
    } else {
      const filtered = options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Escribe un framework..."
        className="border border-gray-300 outline-none w-full p-2 rounded-md"
      />

      {text.length > 0 && filteredOptions.length > 0 && (
        <ul className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => setText(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DynamicSelect;

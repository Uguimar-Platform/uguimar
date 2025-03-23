"use client";
import React, { useState } from "react";
import Dropdown from "./components/atoms/dropdown";
import DynamicSelect from "./components/atoms/dynamicSelect";
import { ArrowDown } from "@mynaui/icons-react";
import InputAtom from "./components/atoms/input";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState<string | number>("");

  const staticItems = [
    { value: "1", content: "React" },
    { value: "2", content: "Angular" },
    { value: "3", content: "Vue" },
    { value: "4", content: "Svelte" },
  ];
  return <>
  <Dropdown
  options={[
    { id: "1", name: "Opción 1" },
    { id: "2", name: "Opción 2" },
    { id: "3", name: "Opción 3" },
  ]}
  className="w-1/2 bg-[#ffff] text-[#334EAC] border-2 border-[#334EAC] rounded-md"
  />
<DynamicSelect
      label="Framework"
      items={staticItems}
      value={selectedValue}
      onInputChange={(value) => setInputValue(value)}
      onValueChange={(value) => setSelectedValue(value)}
      labelProps={{
        icon: <ArrowDown />,
        iconPosition: "right",
        textColor: "text-blue-600",
        font: "onest",
        fontWeight: 600,
      }}
    />

<InputAtom
      type="email"
      name="email"
      placeholder="Enter your email"
      className="border border-gray-300  bg-[#34EAC] text-[#334EAC] rounded-md"
      style={{ fontSize: "16px" }}
    />

  </>;
}

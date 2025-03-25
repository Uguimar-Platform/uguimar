"use client";
import React, { useState } from "react";
import LinkAtom from "./components/atoms/links";
import LabelAtom from "./components/atoms/label";
import InputAtom from "./components/atoms/input";
import ErrorMessageAtom from "./components/atoms/errorMessage";
import DynamicSelectAtom from "./components/atoms/dynamicSelect";
import DropdownAtom from "./components/atoms/dropdown";
import CheckboxAtom from "./components/atoms/checkbox";
import ButtonAtom from "./components/atoms/button";
import { Info, Check, Bell } from "@mynaui/icons-react";

export default function Home() {
  const items = [
    { value: "1", content: "Opción 1" },
    { value: "2", content: "Opción 2" },
    { value: "3", content: "Opción 3" },
  ];
  return (
    <div>
      <InputAtom name="example" placeholder="Escribe algo..." />
    </div>
  );
}

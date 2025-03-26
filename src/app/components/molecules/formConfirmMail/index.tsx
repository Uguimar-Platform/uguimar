"use client";
import React, { useState } from "react";
import ButtonAtom from "../../atoms/button";
import InputAtom from "../../atoms/input";
import LabelAtom from "../../atoms/label";
import { Divide } from "lucide-react";
import { title } from "process";

const FormConfirmMail = () => {
  // State to store the security code (an array of six empty strings)
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));
  // State to track if there is an error (e.g., an incomplete code)
  const [error, setError] = useState<boolean>(false);

  /**
   * Handles input change in the security code fields.
   * @param index - The position of the digit being entered.
   * @param value - The new value entered by the user.
   */
  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      setError(false); // Reset error when a valid input is entered
      if (value && index < 5) {
        document.getElementById(`code-input-${index + 1}`)?.focus();
      }
    }
  };
  /**
   * Handles form submission.
   * @param e - The form submit event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.some((num) => num === "")) {
      setError(true);
    }
  };

  const inputsCode = code.map((num, index) => (
    <InputAtom
      key={index}
      name={`code-input-${index}`}
      type="text"
      value={num}
      onChange={(e) => handleChange(index, e.target.value)}
      className={`w-14 h-16 text-center text-xl font-semibold border-1 rounded-md bg-blue-100 focus:outline-none focus:border-blue-500 ${
        error && num === "" ? "border-red-500" : "border-[#334EAC]"
      }`}
    />
  ));

  const title = (
    <LabelAtom
      className="py-2 "
      as="h2"
      fontFamily="BlackMango"
      fontSize={40}
      fontWeight={800}
      textColor="#334EAC"
      text="Confirma tu cuenta"
    />
  )

  const parafo = (
    <LabelAtom
      className=" pb-10"
      as="p"
      fontFamily="Poppins"
      fontSize={18}
      fontWeight={300}
      textColor="#081f5c"
      text="En su correo llegó un código para confirmar la cuenta"
    />
  )

  const subtitle = (
    <LabelAtom
      className="mb-4"
      as = "h3"
      fontFamily="Poppins"
      fontSize={20}
      fontWeight={600}
      textColor="#334EAC"
      text="Código de seguridad"
    />
  );

  return (
    <div className="flex flex-col items-center justify-center">

      {title}
      {parafo}
      <div className="flex flex-col items-center py-6 px-8  border border-[#334EAC] rounded-[25px] max-w-sm mx-auto bg-white box-content">
        {subtitle}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <div className="flex gap-1 mb-5">{inputsCode}</div>
          <ButtonAtom
            type="submit"
            className="w-full justify-center rounded-md"
          >
            Confirmar
          </ButtonAtom>
        </form>
      </div>
    </div>
  );
};

export default FormConfirmMail;

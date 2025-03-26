"use client";
import React, { useState } from "react";
import ButtonAtom from "../../atoms/button";
import InputAtom from "../../atoms/input";

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
            setError(false);// Reset error when a valid input is entered
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
        if (code.some(num => num === "")) {
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
            className={`w-12 h-15 text-center text-xl font-semibold border-2 rounded-md bg-blue-100 focus:outline-none focus:border-blue-500 ${
                error && num === "" ? "border-red-500" : "border-[#334EAC]"
            }`}
        />
    ));
    
    return (
        <div className="flex flex-col items-center p-6 border border-[#334EAC] rounded-2xl max-w-sm mx-auto bg-white">
            <h2 className="text-lg font-bold text-[#334EAC] mb-4">Código de seguridad</h2>
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                <div className="flex gap-1 mb-5">
                    {inputsCode}
                </div>
                <ButtonAtom
                    type="submit"
                    className="w-full justify-center rounded-md"
                >
                    Confirmar
                </ButtonAtom>
            </form>
        </div>
    );
};

export default FormConfirmMail;

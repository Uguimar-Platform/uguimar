'use client';

import React, { useState } from 'react';
import InputAtom from '../../atoms/input/index'
import LabelAtom from '../../atoms/label/index';
import ButtonAtom from '../../atoms/button/index';

type FormCodePassProps = {
    onSubmit: (code: string) => void;
    email: string;
    inputLength?: number;
    styles?: {
      labelColor?: string;
      inputBgColor?: string;
      fontFamily?: 'Poppins' | 'Onest' | 'SFProDisplay';
      buttonBgColor?: string;
      buttonTextColor?: string;
    };
  };
  
  const FormCodePass: React.FC<FormCodePassProps> = ({
    onSubmit,
    email,
    inputLength = 6,
    styles = {},
  }) => {
    const [code, setCode] = useState<string[]>(Array(inputLength).fill(''));
  
    const handleChange = (index: number, value: string) => {
      if (value.length > 1) return;
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
  
      const next = document.getElementById(`code-${index + 1}`);
      if (value && next) (next as HTMLInputElement).focus();
    };
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === 'Backspace' && !code[index] && index > 0) {
        const prev = document.getElementById(`code-${index - 1}`);
        if (prev) (prev as HTMLInputElement).focus();
      }
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(code.join(''));
    };
  
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col items-center gap-6">
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold text-[#2A3693] font-Onest">Restablecer contraseña</h1>
          <p className="text-[#1C1C1C] text-base font-normal font-SFProDisplay">
            Se envió un correo a <strong>{email}</strong>, introduce tu código
          </p>
        </div>
  
        <div className="w-full border border-[#2A3693] rounded-2xl p-6 flex flex-col items-center gap-4">
          <LabelAtom
            text="Código de seguridad"
            fontWeight="bold"
            fontSize="18px"
            textColor={styles.labelColor || '#2A3693'}
            fontFamily={styles.fontFamily || 'Onest'}
          />
  
          <div className="flex justify-center gap-3">
            {code.map((val, i) => (
              <InputAtom
                key={i}
                name={`code-${i}`}
                type="text"
                value={val}
                onChange={(e) => handleChange(i, e.target.value)}
                onBlur={() => {}}
                className="w-12 h-14 text-center text-xl border border-[#2A3693] focus:ring-2 focus:ring-[#2A3693]"
                colorBG={styles.inputBgColor || '#E7F1FF'}
                fontFamily={styles.fontFamily || 'Poppins'}
                fontWeight="medium"
                style={{ borderRadius: '12px' }}
                placeholder=""
              />
            ))}
          </div>
  
          <ButtonAtom
            className="w-full py-3 text-base font-semibold rounded-lg"
            bgColor={styles.buttonBgColor || '#2A3693'}
            textColor={styles.buttonTextColor || '#ffffff'}
            type="submit"
          >
            Confirmar
          </ButtonAtom>
        </div>
      </form>
    );
  };
  
  export default FormCodePass;
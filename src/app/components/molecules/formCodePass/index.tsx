'use client';

import React, { useState } from 'react';
import InputAtom from '../../atoms/input/index'
import LabelAtom from '../../atoms/label/index';
import ButtonAtom from '../../atoms/button/index';
import {Formik, Form, Field} from 'formik'

type FormCodePassProps = {
    onSubmit: (code: string) => void;
    email: string;
    inputLength?: number;
    styles?: {
      labelColor?: string;
      inputBgColor?: string;
      fontFamily?: 'Poppins' | 'Onest' | 'SFProDisplay' | 'BlackMango';
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
      <div className="flex justify-center items-center min-h-screen bg-[#E7F1FF] p-4">
      <div className="bg-[#F9FCFF] w-[1350px] h-[550px] rounded-2xl shadow-lg p-20 relative">
        <Formik
          initialValues={{ code: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="w-full w-[570px] mx-auto flex flex-col items-center gap-6">
          <ButtonAtom
            className="absolute top-8 left-8 self-start px-4 py-2 border border-[#2A3693] rounded-lg text-[#2A3693] font-medium"
            bgColor={styles.buttonBgColor || '#F9FCFF'}
            textColor={styles.buttonTextColor || '#2A3693'}
            icon="ArrowLeft"
            iconPosition="left"
          >
            Volver
          </ButtonAtom>

          <div className="text-center">
            <LabelAtom
              className=" mb-0"
              as="h2"
              text="Restablecer contraseña"
              fontSize={40}
              fontWeight={600}
              textColor={styles.labelColor || '#334EAC'}
              fontFamily={styles.fontFamily || 'BlackMango'}
            />
          </div>

          <div className="text-base text-center flex items-center flex-wrap gap-1 mb-6 -mt-6">
            <LabelAtom
              fontSize={17}
              text="Se envió un correo a"
              fontWeight="normal"
              textColor='#081F5C'
              fontFamily='Poppins'
            />
            <LabelAtom
              className="font-semibold"
              fontSize={17}
              text={`${email},`}
              textColor='#081F5C'
              fontFamily='Poppins'
            />
            <LabelAtom
              fontSize={17}
              text="introduce tu código"
              fontWeight="normal"
              textColor='#081F5C'
              fontFamily='Poppins'
            />
          </div>
    
          <div className="w-[448px] border border-[#2A3693] rounded-2xl p-6 flex flex-col items-center gap-4">
            <LabelAtom
              text="Código de seguridad"
              fontWeight="bold"
              fontSize="18px"
              textColor={styles.labelColor || '#2A3693'}
              fontFamily={styles.fontFamily || 'Poppins'}
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
              className="w-full h-12 flex items-center justify-center text-base font-semibold rounded-lg"
              bgColor={styles.buttonBgColor || '#2A3693'}
              textColor={styles.buttonTextColor || '#ffffff'}
              type="submit"
            >
              Confirmar
            </ButtonAtom>

          </div>
        </form>
      )}
      </Formik>
    </div>
    </div>
  );
  };
  
  export default FormCodePass;
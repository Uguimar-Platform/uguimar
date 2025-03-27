'use client';

import React from 'react';
import { Formik, Form } from 'formik';
import InputAtom from '../../atoms/input';
import LabelAtom from '../../atoms/label';
import ButtonAtom from '../../atoms/button';

interface FormCodePassProps {
  className?: string;
  email?: string;
}

const FormCodePass: React.FC<FormCodePassProps> = ({
  email = 'uguimar@uguvirtual.edu.pe',
  className = ''
}) => {
  const handleCodeSubmit = (code: string) => {
    if (code === "123456") {
      alert("¡Código correcto! Bienvenido");
    } else {
      alert("Código incorrecto. Por favor, intenta de nuevo.");
    }
  };

  return (
    <Formik
      initialValues={{ code: '' }}
      onSubmit={(values) => handleCodeSubmit(values.code)}
    >
      {({ values, setFieldValue }) => (
        <Form className={`w-full max-w-md mx-auto flex flex-col items-center gap-6 ${className}`}>
          <div className="text-center space-y-1">
            <h1 className="text-[40px] font-[800] text-[#2A3693] font-['Black_Mango'] leading-[100%] tracking-[0%] text-center">
              Restablecer contraseña
            </h1>
            <p className="text-[#1C1C1C] text-[18px] font-[300] font-['Poppins'] leading-[100%] tracking-[0%] text-center">
              Se envió un correo a <strong>{email}</strong>, introduce tu código
            </p>
          </div>

          <div className="w-full border border-[#2A3693] rounded-[24px] p-6 flex flex-col items-center gap-4">
            <LabelAtom
              text="Código de seguridad"
              fontFamily="Poppins"
              fontWeight="bold"
              className="text-lg text-[#2A3693]"
            />

            <div className="flex justify-center gap-3">
              {Array(6).fill('').map((_, i) => (
                <InputAtom
                  key={i}
                  name={`code-${i}`}
                  type="text"
                  value={values.code[i] || ''}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    if (newValue.length > 1) return;
                    
                    const newCode = values.code.split('');
                    newCode[i] = newValue;
                    setFieldValue('code', newCode.join(''));

                    if (newValue && i < 5) {
                      const next = document.getElementById(`code-${i + 1}`);
                      if (next) (next as HTMLInputElement).focus();
                    }
                  }}
                  onBlur={(e) => {
                    if (!values.code[i] && i > 0) {
                      const prev = document.getElementById(`code-${i - 1}`);
                      if (prev) (prev as HTMLInputElement).focus();
                    }
                  }}
                  className="w-12 h-14 text-center text-xl border border-[#2A3693] rounded-lg 
                            focus:ring-2 focus:ring-[#2A3693] bg-[#E7F1FF]"
                  fontFamily="SFProDisplay"
                  placeholder=""
                />
              ))}
            </div>

            <ButtonAtom
              type="submit"
              className="w-[424px] h-[35px] rounded-[8px] border border-[#334EAC] 
                        bg-[#334EAC] text-white hover:bg-[#334EAC]/90 transition-colors
                        flex justify-center  items-center"
              fontFamily="SFProDisplay"
            >
              Confirmar
            </ButtonAtom>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormCodePass;
'use client';

import React, { useState } from 'react';
import InputAtom from '../../atoms/input/index'
import LabelAtom from '../../atoms/label/index';
import ButtonAtom from '../../atoms/button/index';
import {Formik, Form} from 'formik'

type FormCodePassProps = {
    onSubmit: (code: string) => void;
    email: string;
    inputLength?: number;
  };
  
  const FormCodePass: React.FC<FormCodePassProps> = ({
    onSubmit,
    email,
    inputLength = 6,
  }) => {
    
    const [code] = useState<string[]>(new Array(inputLength).fill(''));
  
    return (
      <div className="flex flex-col items-center justify-center">
        <LabelAtom
          className="py-2"
          as="h2"
          text="Restablecer contraseña"
          fontSize={40}
          fontWeight={800}
          textColor="#334EAC"
          fontFamily="Poppins"
        />

      <div className="text-center flex items-center flex-wrap gap-1 mb-6">
        <LabelAtom  
          as="p"
          fontSize={18}
          text="Se envió un correo a"
          fontWeight={300}
          textColor='#081F5C'
          fontFamily='Poppins'
        />
        <LabelAtom
          as="p"
          fontSize={18}
          text={`${email},`}
          fontWeight={600}
          textColor='#081F5C'
          fontFamily='Poppins'
        />
        <LabelAtom
          as="p"
          fontSize={18}
          text="introduce tu código"
          fontWeight={300}
          textColor='#081F5C'
          fontFamily='Poppins'
        />
      </div>
      
      <div className="flex flex-col items-center py-6 px-8  border border-[#334EAC] rounded-[25px] max-w-sm mx-auto bg-white box-content">
        <LabelAtom
          className="mb-4"
          as="h3"
          text="Código de seguridad"
          fontWeight={600}
          fontSize={20}
          textColor="#334EAC"
          fontFamily="Poppins"
        />

        <Formik initialValues={{ code: "" }} onSubmit={(values) => {}}>
          <Form className="w-full flex flex-col items-center">
            <div className="flex gap-2 mb-5">
              {code.map((val, i) => (
                <InputAtom
                  key={i}
                  name={`code-input-${i}`}
                  type="text"
                  value={val}
                  className={"w-14 h-16 text-center text-xl font-semibold border-1 border-[#334EAC] focus:ring-2 focus:ring-[#334EAC]"}
                  colorBG='#E7F1FF'
                  fontFamily='Poppins'
                />
              ))}
            </div>
            <ButtonAtom
              className="w-full justify-center rounded-md"
              type="submit"
            >
              Confirmar
            </ButtonAtom>
          </Form>
        </Formik>
      </div>
    </div>
  );
  };
  
  export default FormCodePass;
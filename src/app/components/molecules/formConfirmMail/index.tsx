"use client";
import React, { useState } from "react";
import ButtonAtom from "../../atoms/button";
import InputAtom from "../../atoms/input";
import LabelAtom from "../../atoms/label";
import { Formik, Form } from "formik";

const FormConfirmMail = () => {
  // State to store the security code (an array of six empty strings)
  const [code] = useState<string[]>(new Array(6).fill(""));

  return (
    <div className="flex flex-col items-center justify-center">
      <LabelAtom
        className="py-2 "
        as="h2"
        fontFamily="BlackMango"
        fontSize={40}
        fontWeight={800}
        textColor="#334EAC"
        text="Confirma tu cuenta"
      />

      <LabelAtom
        className=" pb-10"
        as="p"
        fontFamily="Poppins"
        fontSize={18}
        fontWeight={300}
        textColor="#081f5c"
        text="En su correo llegó un código para confirmar la cuenta"
      />
      <div className="flex flex-col items-center py-6 px-8  border border-[#334EAC] rounded-[25px] max-w-sm mx-auto bg-white box-content">
        <LabelAtom
          className="mb-4"
          as="h3"
          fontFamily="Poppins"
          fontSize={20}
          fontWeight={600}
          textColor="#334EAC"
          text="Código de seguridad"
        />
        <Formik initialValues={{ code: "" }} onSubmit={(values) => {}}>
          <Form className="w-full flex flex-col items-center">
            <div className="flex gap-1 mb-5">
              {code.map((num, index) => (
                <InputAtom
                  key={index}
                  name={`code-input-${index}`}
                  type="text"
                  value={num}
                  className={`w-14 h-16 
                    text-center text-xl 
                    font-semibold border-1 
                    rounded-md bg-blue-100 
                    focus:outline-none 
                    border-[#334EAC]`}
                />
              ))}
            </div>
            <ButtonAtom
              type="submit"
              className="w-full justify-center rounded-md"
            >
              Confirmar
            </ButtonAtom>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormConfirmMail;

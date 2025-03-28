"use client";
import { Formik, Form } from "formik";
import React from "react";
import InputAtom from "../../atoms/input";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";
import { Lock } from "@mynaui/icons-react";

function ForgotPass() {
  const initialValues = {
    email: "",
  };

  const handleSubmit = (values: { email: string }) => {
    console.log("Password reset requested for:", values.email);
  };

  return (
    <section className="w-full p-6 flex flex-col items-center">
      <div className="flex flex-col items-center mb-16">
        <div className="bg-[#334EAC] rounded-[15px] p-3 mb-8">
          <Lock className="w-12 h-12 text-white" />
        </div>
        <LabelAtom
          text="¿Has olvidado tu contraseña?"
          as="h1"
          fontFamily="Poppins"
          fontWeight="bold"
          fontSize="40px"
          textColor="#2D3A8C"
          className="text-center"
        />
        <LabelAtom
          text="No hay problema, enviaremos un correo con las instrucciones"
          as="p"
          fontFamily="Poppins"
          fontWeight="regular"
          fontSize="18px"
          textColor="#4A5568"
          className="text-center"
        />
      </div>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, handleBlur }) => (
          <Form className="space-y-4 max-w-lg w-full bg-white p-8 rounded-[25px] border-[#334EAC] border-1">
            <div className="space-y-2">
              <LabelAtom
                text="Correo electrónico"
                htmlFor="email"
                fontFamily="Poppins"
                fontWeight="medium"
                fontSize="16px"
                icon="Envelope"
                textColor="#334EAC"
              />
              <InputAtom
                type="email"
                name="email"
                placeholder="you@email.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full text-[#334EAC] text-sm py-2"
                colorBG="#E7F1FF"
              />
            </div>

            <ButtonAtom
              type="submit"
              className="w-full py-2 text-sm justify-center rounded-[8px]"
              bgColor="#334EAC"
              textColor="#FFFFFF"
              fontFamily="Poppins"
              fontWeight={600}
            >
              Enviar
            </ButtonAtom>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default ForgotPass;

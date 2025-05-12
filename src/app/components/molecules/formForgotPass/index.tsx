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
    <article className="justify-center flex flex-col items-center">
      <div className="flex flex-col items-center mb-6 w-2xl">
        <div className="hidden md:block bg-[#334EAC] rounded-[15px] p-3 mb-8">
          <Lock className="w-12 h-12 text-white" />
        </div>
        <LabelAtom
          text="¿Has olvidado tu contraseña?"
          as="h1"
          fontFamily="BlackMango"
          fontWeight="bold"
          fontSize="text-[35px] md:text-[40px] max-w-sm sm:max-w-none leading-none"
          textColor="#334EAC"
          className="text-center"
        />
        <LabelAtom
          text="No hay problema, enviaremos un correo con las instrucciones"
          as="p"
          fontFamily="Poppins"
          fontSize="text-md sm:text-base lg:text-xl mt-2"
          fontWeight={300}
          textColor="#081F5C"
          className="text-center m-2 md:mb-6 max-w-[300px] md:max-w-none"
        />
      </div>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, handleBlur }) => (
          <Form className="rounded-[25px] md:p-8 flex-col flex justify-center w-full max-w-[500px] h-auto md:border border-[#334EAC]">
            <div className="space-y-6 mb-8">
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
                  className="w-full text-[#334EAC] text-sm py-2 my-3"
                  colorBG="#E7F1FF"
                />
              </div>
            </div>

            <ButtonAtom
              type="submit"
              className="w-full py-3 font-medium rounded-[8px] text-center flex justify-center text-[14px] md:text-[14px]"
              bgColor="#334EAC"
              textColor="#FFFFFF"
              fontFamily="Poppins"
              fontWeight={600}
              hoverColor="#081F5C"
              text="Enviar"
            />
          </Form>
        )}
      </Formik>
    </article>
  );
}

export default ForgotPass;

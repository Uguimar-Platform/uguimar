"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import ButtonAtom from "../../atoms/button";
import CheckboxAtom from "../../atoms/checkbox";
import LabelAtom from "../../atoms/label";
import LinkAtom from "../../atoms/links";
import InputField from "../../molecules/inputField";
import { Eye, EyeSlash } from "@mynaui/icons-react";

const FormLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <article className="justify-center flex flex-col items-center">
      <LabelAtom
        text="¡Bienvenido!"
        as="h1"
        textColor="#334EAC"
        className="flex justify-center md:mb-6"
        fontFamily="BlackMango"
        fontWeight="bold"
        fontSize="text-[40px] sm:text-[30px] lg:text-[40px] max-w-sm sm:max-w-none leading-none"
      />

      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberPassword: false,
        }}
        onSubmit={(values) => {
          console.log("Formulario enviado con:", values);
        }}
      >
        {({ handleChange, values }) => (
          <Form className="rounded-[25px] md:p-8 flex-col flex justify-center w-full max-w-[500px] h-[460px] md:border border-[#334EAC]">
            <div className="space-y-6 md:space-y-8 mb-4 sm:mb-6">
              <InputField
                label="Usuario/Correo electrónico"
                name="email"
                type="text"
                placeholder="you@email.com"
                icon="User"
                labelFontFamily="Poppins"
                inputFontFamily="Poppins"
                colorBG="#F0F7FF"
                labelClassName="text-[#334EAC]"
                inputClassName="w-full"
              />
              <div className="relative">
                <InputField
                  label="Contraseña"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  icon="Lock"
                  labelFontFamily="Poppins"
                  inputFontFamily="Poppins"
                  colorBG="#F0F7FF"
                  labelClassName="text-[#334EAC]"
                  inputClassName="w-full border border-gray-200 rounded-md"
                />
                <ButtonAtom
                  type="button"
                  bgColor="transparent"
                  hoverColor="transparent"
                  textColor="#334EAC"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 top-7 right-0 flex items-center bg-transparent text-blue-600"
                  text={showPassword ? <Eye /> : <EyeSlash />}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full items-center gap-4 sm:gap-0">
              <LinkAtom
                to="/forgot-password"
                label="¿Has olvidado tu contraseña?"
                className="text-[#334EAC] hover:underline w-full sm:flex-grow"
                fontFamily="Poppins"
                fontWeight="regular"
                fontSize="text-[12px]"
              />
              <CheckboxAtom
                label="Recordar la contraseña"
                name="rememberPassword"
                className="w-full md:items-end"
                fontSize="text-[12px]"
                checked={values.rememberPassword}
                onChange={handleChange}
                color="#334EAC"
                fontFamily="Poppins"
                fontWeight="regular"
              />
            </div>

            <div className="flex flex-col sm:flex-row mt-8 sm:mt-12 gap-4 sm:gap-12">
              <ButtonAtom
                type="button"
                bgColor="#fff"
                textColor="#334EAC"
                className="hidden sm:block w-full sm:w-1/2 py-2 rounded-md border border-[#334EAC] text-center justify-center text-xs lg:text-base"
                fontFamily="Poppins"
                fontWeight="semibold"
                text="Crea tu cuenta"
              />
              <ButtonAtom
                type="submit"
                bgColor="#334EAC"
                textColor="#fff"
                className="w-full sm:w-1/2 py-3 font-medium rounded-[8px] text-center flex justify-center text-[14px] md:text-[14px]"
                fontFamily="Poppins"
                fontWeight="semibold"
                text="Acceder"
              />
            </div>
          </Form>
        )}
      </Formik>
    </article>
  );
};

export default FormLogin;

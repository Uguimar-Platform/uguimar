"use client";

import { useState } from "react";
import { Formik } from "formik";
import ButtonAtom from "../../atoms/button";
import CheckboxAtom from "../../atoms/checkbox";
import LabelAtom from "../../atoms/label";
import LinkAtom from "../../atoms/links";
import InputField from "../../molecules/inputField";
import { Eye, EyeSlash, Lock, User } from "@mynaui/icons-react";

const FormLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      <LabelAtom
        text="¡Bienvenido!"
        as="h1"
        textColor="#334EAC"
        className="ml-18 mb-7"
        fontFamily="SFProDisplay"
        fontWeight="bold"
        fontSize={50}
      />

      <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
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
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Usuario/Correo electrónico"
                name="email"
                type="text"
                placeholder="you@email.com"
                icon={<User size={20} color="#334EAC" />}
                labelFontFamily="Poppins"
                inputFontFamily="Poppins"
                colorBG="#F0F7FF"
                labelClassName="text-[#334EAC]"
                inputClassName="w-full  text border border-gray-200 rounded-md"
              />

              <div className="relative">
                <InputField
                  label="Contraseña"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  icon={<Lock size={20} color="#334EAC" />}
                  labelFontFamily="Poppins"
                  inputFontFamily="Poppins"
                  colorBG="#F0F7FF"
                  labelClassName="text-[#334EAC]"
                  inputClassName="w-full border border-gray-200 rounded-md pr-10"
                />
                <ButtonAtom
                  type="button"
                  bgColor="transparent"
                  hoverColor="transparent"
                  textColor="#334EAC"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 top-7 right-0 flex items-center bg-transparent text-blue-600"
                >
                  {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                </ButtonAtom>
              </div>

              <div className="flex justify-between items-center">
                <LinkAtom
                  to="/forgot-password"
                  label="¿Has olvidado tu contraseña?"
                  className="text-[#334EAC] text-xs hover:underline"
                  fontFamily="Poppins"
                  fontWeight="regular"
                />
                <CheckboxAtom
                  label="Recordar la contraseña"
                  name="rememberPassword"
                  checked={values.rememberPassword}
                  onChange={handleChange}
                  color="#334EAC"
                  fontFamily="Poppins"
                  fontWeight="regular"
                  className="text-[12px]"
                  size="md"
                />
              </div>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 pt-4">
                <ButtonAtom
                  type="button"
                  bgColor="#fff"
                  textColor="#334EAC"
                  className="w-full sm:w-1/2 py-3 rounded-full border border-[#334EAC] text-center flex justify-center"
                  fontFamily="Poppins"
                  fontWeight="semibold"
                >
                  Crea tu cuenta
                </ButtonAtom>
                <ButtonAtom
                  type="submit"
                  bgColor="#334EAC"
                  textColor="#fff"
                  className="w-full sm:w-1/2 py-3 rounded-full text-center flex justify-center"
                  fontFamily="Poppins"
                  fontWeight="semibold"
                >
                  Acceder
                </ButtonAtom>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormLogin;

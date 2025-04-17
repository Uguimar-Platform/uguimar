"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import ButtonAtom from "../../atoms/button";
import CheckboxAtom from "../../atoms/checkbox";
import LabelAtom from "../../atoms/label";
import LinkAtom from "../../atoms/links";
import InputField from "../../molecules/inputField";
import { Eye, EyeSlash} from "@mynaui/icons-react";

const FormLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-[550px] mx-auto  w-auto">
      <LabelAtom
        text="¡Bienvenido!"
        as="h1"
        textColor="#334EAC"
        className="flex justify-center"
        fontFamily="BlackMango"
        fontWeight="bold"
        fontSize={50}
      />
      <LabelAtom
        text="Para ingresar coloca tus datos"
        as="h3"
        textColor="#081F5C"
        className="flex justify-center pb-4"
        fontFamily="Poppins"
        fontWeight={400}
        fontSize={16}
      />

      <div className="bg-white rounded-3xl p-10 border border-[#081F5C] shadow-sm">
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
            <Form className="w-full space-y-8">
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
                inputClassName="w-full text border border-gray-200 rounded-md"
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
                  {showPassword ? <Eye /> : <EyeSlash />}
                </ButtonAtom>
              </div>

              <div className="flex items-center w-full gap-x-2">
                <LinkAtom
                  to="/forgot-password"
                  label="¿Has olvidado tu contraseña?"
                  className="text-[#334EAC] text-xs hover:underline flex-grow"
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
                  className="text-xs lg:text-sm whitespace-nowrap"
                  size="md"
                />
              </div>

              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 sm:space-x-4 pt-4">
                <ButtonAtom
                  type="button"
                  bgColor="#fff"
                  textColor="#334EAC"
                  className="w-full md:w-1/2 py-0 rounded-md border border-[#334EAC] text-center flex justify-center text-xs lg:text-base"
                  fontFamily="Poppins"
                  fontWeight="semibold"
                >
                  Crea tu cuenta
                </ButtonAtom>
                <ButtonAtom
                  type="submit"
                  bgColor="#334EAC"
                  textColor="#fff"
                  className="w-full md:w-1/2 py-0 rounded-md text-center flex justify-center md:text-xs lg:text-base"
                  fontFamily="Poppins"
                  fontWeight="semibold"
                >
                  Acceder
                </ButtonAtom>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormLogin;

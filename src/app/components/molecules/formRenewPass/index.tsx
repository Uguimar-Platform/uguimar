import React from "react";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";
import InputField from "../inputField";
import { Formik, Form } from "formik";
import { useState } from "react";
import { Eye, EyeSlash } from "@mynaui/icons-react";

const PasswordReset = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <article className="justify-center flex">
      <div className="flex flex-col items-center justify-center">
        <div className="rounded-2xl  max-w-2xl w-xl">
          <div className="flex flex-col items-center mb-6">
            <img
              src="/AssetKey.svg"
              alt="Password Icon"
              className="w-16 h-16 mb-4 hidden md:block"
            />
            <LabelAtom
              fontFamily="BlackMango"
              fontSize="text-[40px] sm:text-[30px] lg:text-[40px] max-w-sm sm:max-w-none leading-none"
              fontWeight={800}
              textColor="#334EAC"
              text="Nuevas credenciales"
              className="text-center"
            />
            <LabelAtom
              fontFamily="Poppins"
              fontSize="text-md sm:text-base lg:text-xl mt-2"
              fontWeight={300}
              textColor="#081F5C"
              className="text-center m-2 md:mb-6 max-w-[300px] md:max-w-none"
              text="¡Tu identidad fue verificada!, ingresa tu nueva contraseña"
            />
          </div>
          <Formik
            initialValues={{ password: "", confirmPassword: "" }}
            onSubmit={(values) => {
              console.log("Form values:", values);
            }}
          >
            {() => (
              <Form className="space-y-4">
                <div className="p-14 sm:p-8 rounded-[25px] items-center justify-center flex flex-col md:h-[280px] h-auto w-[360px] sm:w-[500px] sm:border border-[#334EAC] mx-auto bg-white">
                  <div className="relative w-full">
                    <InputField
                      icon="LockPassword"
                      placeholder="••••••••"
                      iconPosition="left"
                      label="Nueva contraseña"
                      labelClassName="text-[#334EAC]"
                      labelFontFamily="Poppins"
                      labelFontWeight={400}
                      inputFontFamily="Poppins"
                      inputClassName="text-[#081F5C] w-full"
                      name="password"
                      type={showPassword1 ? "text" : "password"}
                      className="mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                    <ButtonAtom
                      type="button"
                      bgColor="transparent"
                      hoverColor="transparent"
                      textColor="#334EAC"
                      onClick={() => setShowPassword1(!showPassword1)}
                      className="absolute inset-y-0 top-7 right-0 flex items-center bg-transparent text-blue-600"
                      text={
                        showPassword1 ? (
                          <Eye size={20} />
                        ) : (
                          <EyeSlash size={20} />
                        )
                      }
                    />
                  </div>
                  <div className="relative w-full">
                    <InputField
                      icon="LockPassword"
                      label="Confirmar contraseña"
                      placeholder="••••••••"
                      labelClassName="text-[#334EAC]"
                      labelFontFamily="Poppins"
                      labelFontWeight={400}
                      inputFontFamily="Poppins"
                      inputClassName="w-full text-[#081F5C]"
                      name="confirmPassword"
                      type={showPassword2 ? "text" : "password"}
                      className="mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                    <ButtonAtom
                      type="button"
                      bgColor="transparent"
                      hoverColor="transparent"
                      textColor="#334EAC"
                      onClick={() => setShowPassword2(!showPassword2)}
                      className="absolute inset-y-0 top-7 right-0 flex items-center bg-transparent text-blue-600"
                      text={
                        showPassword2 ? (
                          <Eye size={20} />
                        ) : (
                          <EyeSlash size={20} />
                        )
                      }
                    />
                  </div>
                  <ButtonAtom
                    type="submit"
                    bgColor="#334EAC"
                    textColor="#fff"
                    className="w-full p-3 justify-center rounded-lg hover:bg-blue-700"
                    text="Actualizar"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </article>
  );
};

export default PasswordReset;

import React, { useState } from "react";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";
import InputField from "../inputField";
import { Formik, Form } from "formik";
import { Eye, EyeSlash } from "@mynaui/icons-react";

const PasswordReset = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 rounded-2xl w-full max-w-[400px] shadow-lg bg-[#E7F1FF]">
        <div className="flex flex-col items-center mb-6 space-y-2">
          <img
            src="/AssetKey.svg"
            alt="Password Icon"
            className="w-16 h-16 mb-4"
          />
          <LabelAtom
            fontFamily="Poppins"
            fontSize={40}
            fontWeight={800}
            textColor="#334EAC"
            text="Nuevas Credenciales"
            className="text-center"
          />
          <LabelAtom
            fontFamily="Poppins"
            fontSize={14}
            fontWeight={300}
            textColor="#081F5C"
            text="¡Tu identidad fue verificada!, ingresa tu nueva contraseña"
            className="text-center w-[350px] h-[40px] leading-tight tracking-normal"
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
              <div className="py-6 px-8 rounded-lg border border-[#334EAC] max-w-md w-full mx-auto bg-white shadow-md">
                {/* Nueva contraseña */}
                <div className="relative">
                  <InputField
                    icon="Envelope"
                    iconPosition="left"
                    label="Nueva contraseña"
                    labelClassName="!text-[#334EAC] text-[14px] font-light"
                    labelFontFamily="Poppins"
                    inputFontFamily="Poppins"
                    inputClassName="w-[350px] h-[40px] text-[#081F5C] focus:ring-2 focus:ring-[#334EAC] transition-all duration-300"
                    name="password"
                    type={showPassword1 ? "text" : "password"}
                    className="rounded-lg focus:outline-none border border-[#334EAC] bg-white"
                  />
                  <ButtonAtom
                    type="button"
                    bgColor="transparent"
                    hoverColor="transparent"
                    textColor="#334EAC"
                    onClick={() => setShowPassword1(!showPassword1)}
                    className="absolute inset-y-0 top-7 right-3 flex items-center bg-transparent text-blue-600 hover:scale-110 transition-transform duration-300"
                  >
                    {showPassword1 ? <Eye size={20} /> : <EyeSlash size={20} />}
                  </ButtonAtom>
                </div>

                {/* Confirmar contraseña */}
                <div className="relative">
                  <InputField
                    icon="Envelope"
                    label="Confirmar contraseña"
                    labelClassName="text-[#334EAC] text-[14px] font-light"
                    labelFontFamily="Poppins"
                    inputFontFamily="Poppins"
                    inputClassName="w-[350px] h-[40px] text-[#081F5C] focus:ring-2 focus:ring-[#334EAC] transition-all duration-300"
                    name="confirmPassword"
                    type={showPassword2 ? "text" : "password"}
                    className="rounded-lg focus:outline-none border border-[#334EAC] bg-white"
                  />
                  <ButtonAtom
                    type="button"
                    bgColor="transparent"
                    hoverColor="transparent"
                    textColor="#334EAC"
                    onClick={() => setShowPassword2(!showPassword2)}
                    className="absolute inset-y-0 top-7 right-3 flex items-center bg-transparent text-blue-600 hover:scale-110 transition-transform duration-300"
                  >
                    {showPassword2 ? <Eye size={20} /> : <EyeSlash size={20} />}
                  </ButtonAtom>
                </div>

                {/* Botón "Actualizar" */}
                <ButtonAtom
                  type="submit"
                  bgColor="#334EAC"
                  textColor="#fff"
                  className="w-[350px] h-[40px] p-3 justify-center rounded-lg font-bold text-[14px] bg-[#334EAC] hover:bg-[#081F5C] shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Actualizar
                </ButtonAtom>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PasswordReset;

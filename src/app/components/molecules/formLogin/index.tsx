"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputAtom from "../../atoms/input";
import ButtonAtom from "../../atoms/button";
import CheckboxAtom from "../../atoms/checkbox";
import LabelAtom from "../../atoms/label";
import LinkAtom from "../../atoms/links";
import { Eye, EyeSlash, Lock, User } from "@mynaui/icons-react";

const FormLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

  //Implemente el yup para validar los correos y contraseñas
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("El correo electrónico es inválido")
      .required("El correo es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es obligatoria"),
  });

  //Declaramos formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberPassword: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Formulario enviado con:", values);
    },
  });

  return (
    <div className="w-full max-w-md mx-auto">
      <LabelAtom
        text="¡Bienvenido!"
        htmlFor="text"
        textColor="#334EAC"
        className="ml-18 mb-7"
        fontFamily="SFProDisplay"
        fontWeight="bold"
        fontSize={50}
      />

      <div className="bg-white rounded-3xl p-8 border border-blue-200 shadow-sm">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Campo de usuario/correo electrónico */}
          <div className="space-y-2">
            <LabelAtom
              text="Usuario/Correo electrónico"
              htmlFor="email"
              icon={<User size={20} color="#334EAC" />}
              iconPosition="left"
              textColor="#334EAC"
              fontFamily="Poppins"
              fontWeight="medium"
            />
            <InputAtom
              type="text"
              placeholder="you@email.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              colorBG="#F0F7FF"
              className="w-full border border-gray-200 rounded-md"
              fontFamily="Poppins"
            />
            {/* Propiedad para los mensajes de error */}
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          {/* Campo de contraseña */}
          <div className="space-y-2">
            <LabelAtom
              text="Contraseña"
              htmlFor="password"
              icon={<Lock size={20} color="#334EAC" />}
              iconPosition="left"
              textColor="#334EAC"
              fontFamily="Poppins"
              fontWeight="medium"
            />
            <div className="relative">
              <InputAtom
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                colorBG="#F0F7FF"
                className="w-full border border-gray-200 rounded-md"
                fontFamily="Poppins"
              />
               <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
              </button>
            </div>
            
            {/* Propiedad para los mensajes de error */}
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
            
          </div>

          {/* Enlace para recuperar contraseña y checkbox para recordar */}
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
              checked={formik.values.rememberPassword}
              onChange={formik.handleChange}
              color="#334EAC"
              fontFamily="Poppins"
              fontWeight="regular"
              className="text-[12px]"
              size="lg"
            />
          </div>

          {/* Botones de acción */}
          <div className="flex space-x-4 pt-4">
            <ButtonAtom
              type="button"
              bgColor="#fff"
              textColor="#334EAC"
              className="w-1/2 py-3 rounded-full border border-[#334EAC] text-center flex justify-center"
              fontFamily="Poppins"
              fontWeight="semibold"
              disabled={formik.isSubmitting}
            >
              Crea tu cuenta
            </ButtonAtom>
            <ButtonAtom
              type="submit"
              bgColor="#334EAC"
              textColor="#fff"
              className="w-1/2 py-3 rounded-full text-center flex justify-center"
              fontFamily="Poppins"
              fontWeight="semibold"
            >
              {formik.isSubmitting ? "Accediendo" : "Acceder"}
            </ButtonAtom>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
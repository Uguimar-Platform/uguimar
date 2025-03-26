"use client";

import { useState } from "react";
import InputAtom from "../../atoms/input";
import ButtonAtom from "../../atoms/button";
import CheckboxAtom from "../../atoms/checkbox";
import LabelAtom from "../../atoms/label";
import LinkAtom from "../../atoms/links";
import { Eye, EyeSlash, Lock, User } from "@mynaui/icons-react";

const FormLogin: React.FC = () => {
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        <form className="space-y-6">
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
              colorBG="#F0F7FF"
              className="w-full border border-gray-200 rounded-md"
              fontFamily="Poppins"
            />
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
                colorBG="#F0F7FF"
                onChange={(e) => setPassword(e.target.value)} // Se actualiza el estado
                className="w-full border border-gray-200 rounded-md pr-10"
                fontFamily="Poppins"
              />
              {password && ( // Solo se muestra el botón si hay texto en el input
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  {showPassword ? <EyeSlash size={20} color="#334EAC" /> : <Eye size={20} color="#334EAC" />}
                </button>
              )}
            </div>
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
              color="#334EAC"
              fontFamily="Poppins"
              fontWeight="regular"
              className="text-s"
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
              Acceder
            </ButtonAtom>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;

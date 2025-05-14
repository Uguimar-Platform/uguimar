import { useState } from "react";
import LabelAtom from "../../atoms/label";
import InputField from "../../molecules/inputField";
import ButtonAtom from "../../atoms/button";
import { Form, Formik } from "formik";
import { Eye, EyeSlash } from "@mynaui/icons-react";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <article className="justify-center flex flex-col items-center">
      <LabelAtom
        text="¡Regístrate!"
        as="h1"
        textColor="#334EAC"
        className="flex justify-center md:mb-6"
        fontFamily="BlackMango"
        fontWeight="bold"
        fontSize="text-[40px] block md:hidden max-w-sm sm:max-w-none leading-none mb-6"
      />
      <Formik
        initialValues={{
          user: "",
          nombre: "",
          apellido: "",
          correo: "",
          fechNacimiento: "",
          contrasena: "",
          confContrasena: "",
        }}
        onSubmit={(values) => {
          console.log("Valores del formulario:", values);
        }}
      >
        <Form className="rounded-[25px] md:p-8 flex-col flex justify-center w-full max-w-[500px] h-auto md:border border-[#334EAC]">
          <div className="space-y-6 mb-8">
            <InputField
              className="w-full"
              inputClassName="w-full"
              icon="User"
              label="Nombre de usuario"
              labelClassName="text-[#334EAC]"
              name="user"
              type="text"
              placeholder="username"
              labelPosition="left"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                inputClassName="w-full"
                labelClassName="text-[#334EAC]"
                label="Nombres:"
                name="nombres"
                type="text"
                placeholder="John"
                labelPosition="left"
              />
              <InputField
                inputClassName="w-full"
                labelClassName="text-[#334EAC]"
                label="Apellidos:"
                name="apellidos"
                type="text"
                placeholder="Doe"
                labelPosition="left"
              />
            </div>
            <InputField
              inputClassName="w-full"
              labelClassName="text-[#334EAC]"
              icon="Envelope"
              label="Correo electrónico"
              name="correo"
              type="email"
              placeholder="you@email.com"
              labelPosition="left"
            />
            <InputField
              inputClassName="w-full text-[#8a8a8a]"
              labelClassName="text-[#334EAC]"
              icon="Calendar"
              label="Fecha de nacimiento"
              name="fechaNacimiento"
              type="date"
              placeholder="dd/mm/yyyy"
              labelPosition="left"
            />
            <div className="relative">
              <InputField
                inputClassName="w-full pr-10"
                labelClassName="text-[#334EAC]"
                icon="Lock"
                label="Contraseña"
                name="contrasena"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                labelPosition="left"
              />
              <ButtonAtom
                type="button"
                className="absolute right-2 top-[70%] transform -translate-y-1/2 p-0 bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                bgColor="transparent"
                textColor="#334EAC"
                hoverColor="transparent"
                text={showPassword ? <Eye /> : <EyeSlash />}
              />
            </div>
            <div className="relative">
              <InputField
                inputClassName="w-full pr-10"
                labelClassName="text-[#334EAC]"
                icon="Lock"
                label="Confirmar contraseña"
                name="confContrasena"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                labelPosition="left"
              />
              <ButtonAtom
                type="button"
                className="absolute right-2 top-[70%] transform -translate-y-1/2 p-0 bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                bgColor="transparent"
                textColor="#334EAC"
                hoverColor="transparent"
                text={showConfirmPassword ? <Eye /> : <EyeSlash />}
              />
            </div>
          </div>
          <ButtonAtom
            type="submit"
            fontFamily="Poppins"
            className="w-full py-3 font-medium rounded-[8px] text-center flex justify-center text-[14px] md:text-[14px]"
            bgColor="#334EAC"
            textColor="#fff"
            text="Crea tu cuenta"
          />
        </Form>
      </Formik>
    </article>
  );
};

export default FormRegister;

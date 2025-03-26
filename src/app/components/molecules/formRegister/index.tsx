import InputField from "../../molecules/inputField";
import ButtonAtom from "../../atoms/button";
import { Form, Formik } from "formik";

const FormRegister = () => {
  return (
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
      <Form className="grid grid-cols-2 gap-4 p-6 bg-white border-1 border-[#334EAC] rounded-xl m-3 w-[500px]">
        <InputField
          className="col-span-2"
          inputClassName="w-full"
          icon="User"
          label="Nombre de usuario"
          labelClassName="text-[#334EAC]"
          name="user"
          type="text"
          placeholder="username"
          labelPosition="left"
        />
        <InputField
          className="col-span-1"
          inputClassName="w-full"
          labelClassName="text-[#334EAC]"
          label="Nombres:"
          name="nombres"
          type="text"
          placeholder="John"
          labelPosition="left"
        />
        <InputField
          className="col-span-1"
          inputClassName="w-full"
          labelClassName="text-[#334EAC]"
          label="Apellidos:"
          name="apellidos"
          type="text"
          placeholder="Doe"
          labelPosition="left"
        />
        <InputField
          className="col-span-2"
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
          className="col-span-2"
          inputClassName="w-full text-[#8a8a8a]"
          labelClassName="text-[#334EAC]"
          icon="Calendar"
          label="Fecha de nacimiento"
          name="fechaNacimiento"
          type="date"
          placeholder="dd/mm/yyyy"
          labelPosition="left"
        />
        <InputField
          className="col-span-2"
          inputClassName="w-full"
          labelClassName="text-[#334EAC]"
          icon="Lock"
          label="Contraseña"
          name="contrasena"
          type="password"
          placeholder="********"
          labelPosition="left"
        />
        <InputField
          className="col-span-2"
          inputClassName="w-full"
          labelClassName="text-[#334EAC]"
          icon="Lock"
          label="Confirmar contraseña"
          name="confContrasena"
          type="password"
          placeholder="********"
          labelPosition="left"
        />
        <ButtonAtom
          type="submit"
          fontFamily="Poppins"
          className="col-span-2 py-2 px-4 rounded-md hover:bg-blue-700 justify-center"
        >
          Crea tu cuenta
        </ButtonAtom>
      </Form>
    </Formik>
  );
};

export default FormRegister;

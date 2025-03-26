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
      <Form className="grid grid-cols-2 gap-4 p-6 bg-white border-2 border-[#334EAC] rounded-md m-3 w-[500px]">
        <InputField
          className="col-span-2"
          inputClassName="w-full"
          icon="User"
          label="Nombre de usuario"
          name="user"
          type="text"
          placeholder="username"
          labelPosition="left"
        />
        <InputField
          className="col-span-1"
          inputClassName="w-full"
          label="Nombres:"
          name="nombres"
          type="text"
          placeholder="John"
          labelPosition="left"
        />
        <InputField
          className="col-span-1"
          inputClassName="w-full"
          label="Apellidos:"
          name="apellidos"
          type="text"
          placeholder="Doe"
          labelPosition="left"
        />
        <InputField
          className="col-span-2"
          inputClassName="w-full"
          icon="Envelope"
          label="Correo electrónico"
          name="correo"
          type="email"
          placeholder="you@email.com"
          labelPosition="left"
        />
        <InputField
          className="col-span-2"
          inputClassName="w-full"
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

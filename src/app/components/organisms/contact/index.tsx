"use client";
import Button from "../../atoms/button/index";
import LabelAtom from "../../atoms/label";
import TextAreaAtom from "../../atoms/textarea";
import InputField from "../../molecules/inputField";

const ContactSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-10">
      <div className="mb-8">
        <LabelAtom
          text="Contacto"
          as="h1"
          fontFamily="SFProDisplay"
          fontWeight={700}
          textColor="text-black"
          className="text-5xl text-center"
          fontSize="2.5rem"
        />
      </div>

      <div className="flex items-center justify-center bg-[#5670CA] pb-4 w-full ">
        <div className="hidden md:flex flex-col items-center justify-center w-1/3">
          <img src="/icon_contact.webp" alt="" />
        </div>

        <form className="flex flex-col  w-full max-w-lg p-6 rounded-lg space-y-6">
          <InputField
            label="Correo:"
            name="correo"
            type="email"
            placeholder="Email"
            inputClassName="bg-[#F5F8FF] text-[#202020] rounded-md border border-gray-400 w-full rounded-xl"
            labelFontFamily="Onest"
            labelFontWeight="extrabold"
            labelClassName="text-lg text-white "
            labelPosition="left"
          />
          <div>
            <LabelAtom
              fontFamily="Onest"
              fontWeight="extrabold"
              text="Contacto"
              className="mb-1"
              textColor="#fff"
            />
            <TextAreaAtom
              className="w-full rounded-xl"
              name="mensaje"
              placeholder="Escribe tu mensaje"
              height={100}
            />
          </div>
          <Button
            type="submit"
            fontFamily="Poppins"
            fontWeight={600}
            bgColor="#334EAC"
            hoverColor="#081F5C"
            textColor="#fff"
            className="flex justify-center items-center w-full p-2 rounded-lg"
          >
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

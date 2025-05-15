"use client";
import Button from "../../atoms/button/index";
import LabelAtom from "../../atoms/label";
import TextAreaAtom from "../../atoms/textarea";
import InputField from "../../molecules/inputField";

type StyleMode = "default" | "kids";
type ClassStyles = {
  [key in StyleMode]: {
    sectionStyle: string;
    headStyle: string;
    bodyStyle: string;
    bodyContact: string;
    bodyForm: string;
  };
};

interface ContactSectionProps {
  style: StyleMode;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  style = "default",
}) => {
  const classStyles: ClassStyles = {
    default: {
      sectionStyle: "flex flex-col items-center py-10",
      headStyle: "mb-8",
      bodyStyle: "bg-[#5670CA] flex items-center justify-center pb-4 w-full",
      bodyContact: "hidden md:flex flex-col items-center justify-center w-1/3",
      bodyForm: "flex flex-col  w-full max-w-lg p-6 rounded-lg space-y-6",
    },
    kids: {
      sectionStyle: "",
      headStyle: "",
      bodyStyle: "",
      bodyContact: "",
      bodyForm: "",
    },
  };
  const { sectionStyle, headStyle, bodyStyle, bodyForm, bodyContact } =
    classStyles[style];

  return (
    <section className={sectionStyle}>
      {style !== "kids" && (
        <div className={headStyle}>
          <LabelAtom
            text="Contacto"
            as="h1"
            fontFamily="SFProDisplay"
            fontWeight={700}
            textColor="text-black"
            className="text-5xl text-center"
            fontSize="text-[64px]"
          />
        </div>
      )}
      <div className={bodyStyle}>
        {/*  */}
        <div className={bodyContact}>
          <img src="/icon_contact.webp" alt="" />
        </div>

        <form className={bodyForm}>
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
          {/* Label Input Text Area */}
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
          {/* Option Submit */}
          <Button
            type="submit"
            fontFamily="Poppins"
            fontWeight={600}
            bgColor="#334EAC"
            hoverColor="#081F5C"
            textColor="#fff"
            className="flex justify-center items-center w-full p-2 rounded-lg"
            text="Enviar"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

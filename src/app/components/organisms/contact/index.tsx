"use client";
import Button from "../../atoms/button/index";
import DropdownAtom from "../../atoms/dropdown";
import LabelAtom from "../../atoms/label";
import TextAreaAtom from "../../atoms/textarea";
import InputField from "../../molecules/inputField";
import Image from "next/image";

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
  style = "kids",
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
      sectionStyle: "flex flex-col items-center py-10",
      headStyle: "mt-3",
      bodyStyle: "bg-[#5670CA] flex items-center justify-center pb-4 w-full",
      bodyContact: "hidden md:flex flex-col items-center justify-center w-1/3",
      bodyForm: "flex flex-col  w-full max-w-lg p-6 rounded-lg space-y-6",
    },
  };
  const { sectionStyle, headStyle, bodyStyle, bodyForm, bodyContact } =
    classStyles[style];

  const dropdownOptions = [
    { id: "1", name: "Selecciona tu interés" },
    { id: "2", name: "interés 1" },
    { id: "3", name: "interés 2" },
  ];
  return (
    <section className={sectionStyle}>
      {/* {style === "kids" && (
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
      {style !== "kids" && (
        <div className={headStyle}>
          <LabelAtom
            text="MANTENTE AL DÍA EN UGUIMAR"
            as="h1"
            fontFamily="SFProDisplay"
            fontWeight={700}
            textColor="text-black"
            className="text-5xl text-right"
            fontSize="text-[35px]"
          />
          <LabelAtom
            text="Recibe las últimas novedades, lanzamientos de cursos y consejos"
            as="h3"
            fontFamily="SFProDisplay"
            fontWeight={100}
            textColor="text-black"
            className="text-right"
            fontSize="text-[25px]"
          />
          <LabelAtom
            text="de aprendizaje directamente en tu correo"
            as="h3"
            fontFamily="SFProDisplay"
            fontWeight={100}
            textColor="text-black"
            className="text-right"
            fontSize="text-[25px]"
          />
        </div>
      )} */}

      <div className={bodyStyle}>
        {style !== 'kids' && (
        <div className={bodyContact}>
          <img src="/icon_contact.webp" alt="" />
        </div>
        )}

        {style == 'kids' && (
        <div className={bodyContact}>
          <Image src="/Logo.webp" alt="Logo" width={180} height={180} />
          <LabelAtom
            text="Inicio | Cursos | Planes | FAQ | Rutas | Feedback"
            as="h3"
            fontFamily="SFProDisplay"
            fontWeight={500}
            textColor="text-black"
            className="text-left"
            fontSize="text-[20px]"
          />
        </div>
        )}
        
        {style == "kids" && (
          <div>
            <div className={headStyle}>
              <LabelAtom
                text="MANTENTE AL DÍA EN UGUIMAR"
                as="h1"
                fontFamily="SFProDisplay"
                fontWeight={700}
                textColor="text-black"
                className="text-5xl text-right"
                fontSize="text-[35px]"
              />
              <LabelAtom
                text="Recibe las últimas novedades, lanzamientos de cursos y consejos"
                as="h3"
                fontFamily="SFProDisplay"
                fontWeight={100}
                textColor="text-black"
                className="text-right"
                fontSize="text-[25px]"
              />
              <LabelAtom
                text="de aprendizaje directamente en tu correo"
                as="h3"
                fontFamily="SFProDisplay"
                fontWeight={100}
                textColor="text-black"
                className="text-right"
                fontSize="text-[25px]"
              />
            </div>

            <form className={bodyForm}>
              <div className="flex gap-4 mb-2">
                <InputField
                  label=""
                  name="nombres"
                  type="text"
                  placeholder="Nombres"
                />
                <InputField
                  label=""
                  name="apellidos"
                  type="text"
                  placeholder="Apellidos"
                />
              </div>
              <div className="mb-2">
                <DropdownAtom
                  options={dropdownOptions}
                />
                <InputField
                  label=""
                  name="correo"
                  type="email"
                  placeholder="Correo electrónico"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  bgColor="#334EAC"
                  hoverColor="#081F5C"
                  textColor="#fff"
                  iconPosition="right"
                  text="Suscribete ahora"
                />
              </div>
            </form>
          </div>
        )}

        {style !== 'kids' && (
          <div>
            <div className={headStyle} >
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
        )}
      </div>
    </section>
  );
};

export default ContactSection;

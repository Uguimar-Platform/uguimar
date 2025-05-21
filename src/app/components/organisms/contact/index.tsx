import React from "react";
import Button from "../../atoms/button/index";
import DropdownAtom from "../../atoms/dropdown";
import LabelAtom from "../../atoms/label";
import TextAreaAtom from "../../atoms/textarea";
import InputField from "../../molecules/inputField";
import Image from "next/image";

function Contact(){
  return (
    // HEADSTYLE
    <div className="flex flex-col items-center py-10">
      <div className="mb-8">
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
            text="Enviar"
          />
        </form>
      </div>
    </div>
  );
}

const dropdownOptions = [
    { id: "1", name: "Selecciona tu interés" },
    { id: "2", name: "interés 1" },
    { id: "3", name: "interés 2" },
];


function ContactChildren(){
  return (
    <div className="relative flex flex-col items-center py-22 px-6 md:px-30 ">
      <div className="absolute z-[-1] bottom-0 left-0 w-full h-full">
        <Image
          src="/sea_background.webp"
          alt="Fondo Kids"
          fill
          className="object-scale-down md:object-cover object-bottom"
          priority
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-start md:justify-between w-full gap-6">

        <div className="flex flex-col items-start w-full justify-center py-5 md:w-1/3">
          <div className="relative w-[100px] h-[50px] md:w-[150px] md:h-[60px]">
            <Image
              src="/Logo.webp"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <LabelAtom
            text="Inicio  |  Cursos  |  Planes  |  FAQ  |  Rutas  |  Feedback"
            as="h3"
            fontFamily="SFProDisplay"
            fontWeight={300}
            textColor="text-black"
            className="text-left py-3 text-[14px] md:text-[20px]"
          />

          <div className="flex gap-4 w-full mt-4 ">
            <Button
              text={ <img src="/Instagram_icon.webp" alt="Instagram" className="w-full h-full object-contain rounded-full"/> }
              className="rounded-full w-14 h-14"
              bgColor="#FFFFFF"
              hoverColor="#f9f9f9"
            />
            <Button
              text={ <img src="/facebook_icon.webp" alt="Facebook" className="w-full h-full object-contain rounded-full"/> }
              className="rounded-full p-3 w-14 h-14"
              bgColor="#FFFFFF"
              hoverColor="#f9f9f9"
            />
            <Button
              text={ <img src="/tiktok_icon.webp" alt="TikTok" className="w-full h-full object-contain rounded-full"/> }
              className="rounded-full p-3 w-14 h-14"
              bgColor="#FFFFFF"
              hoverColor="#f9f9f9"
            />
          </div>
        </div>

          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <div className="mt-3 w-full flex flex-col items-center md:items-end text-center md:text-right">
              <LabelAtom
                className="flex-col py-3 items-end leading-tight"
                text="MANTENTE AL DÍA EN UGUIMAR"
                as="h1"
                fontFamily="SFProDisplay"
                fontWeight={800}
                textColor="text-black"
                fontSize="text-[25px] md:text-[35px]"

              />
              <LabelAtom
                text="Recibe las últimas novedades, lanzamientos de cursos y consejos"
                as="h3"
                fontFamily="SFProDisplay"
                fontWeight={400}
                textColor="#858585"               
                className="flex-col items-end leading-none"
                fontSize="text-[18px] md:text-[22px]"

              />
              <LabelAtom
                text="de aprendizaje directamente en tu correo."
                as="h3"
                fontFamily="SFProDisplay"
                fontWeight={400}
                textColor="#858585"
                className="flex-col items-end leading-none"
                fontSize="text-[18px] md:text-[22px]"
              />
            </div>

            <form className="flex flex-col w-full py-6 rounded-lg space-y-6 items-center md:items-end">
              <div className="flex w-full gap-3 mb-4 just">
                <InputField
                  label=""
                  name="nombres"
                  type="text"
                  placeholder="Nombres"
                  colorBG="#FFFFFF"
                  inputClassName="text-black w-full rounded-xl px-4 py-3"                
                />

                <InputField
                  label=""
                  name="apellidos"
                  type="text"
                  placeholder="Apellidos"
                  colorBG="#FFFFFF"
                  inputClassName="text-black w-full rounded-xl px-4 py-3"    
                />

              </div>
              <div className="mb-5 w-full">
                <DropdownAtom
                  options={dropdownOptions}
                    colorBGButton="#FFFFFF"       
                    fontWeight={400}
                    borderColor="none"    
                    fontFamily="Poppins"    
                    borderWeight={0}              
                    textSize="base"                
                    className="rounded-xl"        
                />

                <InputField
                  className="mt-2"
                  label=""
                  name="correo"
                  type="email"
                  placeholder="Correo electrónico"
                  colorBG="#FFFFFF"
                  inputClassName="text-black w-full rounded-xl px-4 py-3"  
                />
              </div>
              <div>
                <Button
                  type="submit"
                  bgColor="#334EAC"
                  hoverColor="#081F5C"
                  textColor="#fff"
                  iconPosition="right"
                  text="Suscríbete ahora"
                  textSize="sm" 

                  fontWeight={500}
                  className="px-5 py-3 rounded-xl"
                />
              </div>
            </form>
          </div>
      </div>
    </div>
  );
}

export default Contact;
export { ContactChildren };
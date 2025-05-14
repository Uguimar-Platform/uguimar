"use client";
import DynamicIcon from "../../molecules/dynamic-icon";
import FormLogin from "../../molecules/formLogin";
import ButtonAtom from "../../atoms/button";

export default function LoginOrganism() {
  return (
    <section className="flex flex-col items-center justify-center p-6 md:p-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 p-6 md:p-12 rounded-2xl border border-[#D0D5DD] bg-white w-full max-w-7xl">
        {/* Botón de volver visible solo en tablet */}
        <div className="block lg:hidden mb-4 ">
          <ButtonAtom
            icon="ArrowLeft"
            iconPosition="left"
            className="rounded-lg pr-2"
            type="button"
            textColor="#334EAC"
            bgColor="#D0E3FF"
            hoverColor="#E7F1FF"
            fontWeight="medium"
            text="Volver"
          />
        </div>

        {/* Formulario */}
        <div className="w-full lg:w-1/2">
          <FormLogin />
        </div>

        {/* DynamicIcon solo en desktop */}
        <div className="w-1/2 flex-col items-center text-center hidden lg:block">
          <DynamicIcon />
        </div>
      </div>
    </section>
  );
}

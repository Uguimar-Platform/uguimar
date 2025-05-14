"use client";

import React from "react";
import ButtonAtom from "@/app/components/atoms/button";
import FormResetPassword from "@/app/components/molecules/formResetPassword";

const ResetPassword: React.FC = () => {
  return (
    <section className="w-full md:w-[95%] my-10 sm:my-20 mx-auto flex flex-col items-center justify-center bg-transparent md:bg-white py-6 md:px-10 md:py-10 rounded-[20px] md:rounded-[30px]">
      <div className="w-full px-4 md:px-0">
        <ButtonAtom
          icon="ArrowLeft"
          iconPosition="left"
          textColor="#334EAC"
          bgColor="#D0E3FF"
          hoverColor="#cdddf5"
          className="!px-2 md:px-4 inline md:flex"
          fontFamily="Poppins"
          fontWeight={500}
          text={<span className="hidden md:inline">Volver</span>}
        />
      </div>
      <div className="w-full py-14 md:py-20 text-center">
        <FormResetPassword />
      </div>
    </section>
  );
};

export default ResetPassword;

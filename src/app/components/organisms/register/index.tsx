"use client";

import type React from "react";
import LabelAtom from "@/app/components/atoms/label";
import DynamicIcon from "@/app/components/molecules/dynamic-icon";
import FormRegister from "@/app/components/molecules/formRegister";

const RegisterOrganism: React.FC = () => {
  return (
    <>
      <section className="flex flex-col items-center max-w-7xl mx-auto pt-4 min-h-[90vh] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-center space-x-22 w-full bg-[#F9FCFF] rounded-2xl p-6">
          <div className="flex flex-col items-center justify-center">
            <LabelAtom
              as="h1"
              textColor="#334EAC"
              className=""
              fontFamily="BlackMango"
              fontWeight="extrabold"
              fontSize="text-[40px]"
              text="¡Regístrate!"
            />

            <DynamicIcon
              labelText="Aprende, crece y destaca con cursos prácticos y accesibles en un solo lugar."
              labelColor="#081F5C"
              labelClassName="text-center italic max-w-md"
            />
          </div>

          <div className="flex justify-center">
            <FormRegister />
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterOrganism;

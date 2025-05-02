import React from "react";
import DynamicIcon from "@/app/components/molecules/dynamic-icon";
import FormConfirmMail from "@/app/components/molecules/formConfirmMail";
import ButtonAtom from "@/app/components/atoms/button";

function ConfirmAccount() {
  return (
    <section className="flex flex-col items-center max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className=" bg-[#F9FCFF] rounded-4xl p-16">
        <ButtonAtom
          icon="ArrowLeft"
          bgColor="#ffffff"
          hoverColor="#dddddd"
          textColor="#334EAC"
          className="h-10 rounded-md border-[#334EAC] border-2 self-start mb-4"
        >
          Volver
        </ButtonAtom>
        <div className="flex flex-row justify-center space-x-22 w-full py-10 p-4">
          <div className="flex flex-col items-start justify-center">
            <DynamicIcon
              labelText="Aprende, crece y destaca con cursos prácticos y accesibles en un solo lugar."
              labelColor="#081F5C"
              fontFamily="Poppins"
              fontWeight="light"
              labelClassName="text-center italic max-w-md"
              fontSize={20}
            />
          </div>
          <div className="flex justify-center -mt-18">
            <FormConfirmMail />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConfirmAccount;

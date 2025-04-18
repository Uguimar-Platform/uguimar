"use client";

import React from "react";
import FormForgotPass from "../../molecules/formForgotPass"
import ButtonAtom from "../../atoms/button"

function OForgotPass(){
    return (
        <section className="bg-[#FFFFFF] rounded-[28px] px-6 sm:px-10 py-10 pb-40 mt-4 md:m-24">
            <div className="flex justify-start">
                <ButtonAtom
                    type="button"
                    className="py-2 text-sm rounded-[8px] sm:border border-[#334EAC]"
                    bgColor="!#F9FCFF"
                    icon="ArrowLeft"
                    textColor="#334EAC"
                    fontFamily="Poppins"
                    fontWeight={600}
                >
                    <span className="hidden sm:inline">Volver</span>
                </ButtonAtom>
            </div>
            <div>
                <FormForgotPass/>
            </div>
        </section>
    );
}

export default OForgotPass;
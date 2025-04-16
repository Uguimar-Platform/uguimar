"use client";

import LabelAtom from "../../atoms/label";
import DynamicIcon from "../../molecules/dynamic-icon";
import FormLogin from "../../molecules/formLogin";


export default function LoginOrganism() {
    return (
        <section className="flex flex-col items-center justify-center p-6 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 p-6 md:p-12 rounded-2xl border border-[#D0D5DD] bg-white w-full max-w-5xl">
                <div className="w-full md:w-1/2">
                    <FormLogin />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center text-center">
                    <DynamicIcon
                        labelText="Aprende, crece y destaca con cursos prácticos y accesibles en un solo lugar."
                        labelColor="text-[#081F5C]"
                        className="w-full"
                        labelClassName="text-center text-[#081F5C] text-base font-light"
                    />
                </div>
            </div>
        </section>
    );
}

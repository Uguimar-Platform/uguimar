"use client";

import LabelAtom from "../../atoms/label";
import DynamicIcon from "../../molecules/dynamic-icon";
import FormLogin from "../../molecules/formLogin";


export default function LoginOrganism() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-12 bg-[#F5FAFF]">
            <div className="flex flex-row gap-4 p-12 rounded-2xl border border-[#D0D5DD] bg-white">
                <div>
                    <FormLogin />
                </div>
                <div className="flex flex-col items-center text-center max-w-md">
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

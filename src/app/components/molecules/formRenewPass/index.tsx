
import React from "react";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";
import InputField from "../inputField";
import { Formik, Form } from "formik";

const PasswordReset = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="p-8 rounded-2xl w-full max-w-2xl">
                <div className="flex flex-col items-center mb-6">
                    <img src="/AssetKey.svg" alt="Password Icon" className="w-16 h-16 mb-4" />
                    <LabelAtom fontFamily="Onest" fontSize={40} fontWeight={800} textColor="#334EAC" 
                    text="Nuevas credenciales" 
                    />

                    <LabelAtom fontFamily="Onest" fontSize={18} fontWeight={300} textColor="#081F5C"
                    text="Tu identidad fue verificada!, ingresa tu nueva contraseña" 
                    />
                </div>
                <Formik 
                    initialValues={{ password: '', confirmPassword: '' }}
                    onSubmit={(values) => {
                        console.log('Form values:', values);
                    }}
                >
                    {() => (
                        <Form className="space-y-4">
                            <div className="py-6 px-8 rounded-2xl border border-[#334EAC] bg-white max-w-md w-full mx-auto">
                                <div className="relative">
                                    <InputField
                                        icon="Envelope"
                                        iconPosition="left"
                                        label="Nueva contraseña"
                                        labelClassName="!text-[#334EAC]"
                                        labelFontFamily="Poppins"
                                        labelFontWeight={400}
                                        inputFontFamily="Poppins"
                                        inputClassName="w-full !text-[#334EAC]"
                                        name="password"
                                        type="password"                
                                        className="w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="relative">
                                    <InputField
                                        icon="Envelope"
                                        label="Confirmar contraseña"
                                        labelClassName="!text-[#334EAC]"
                                        labelFontFamily="Poppins"
                                        labelFontWeight={400}
                                        inputFontFamily="Poppins"
                                        inputClassName="w-full !text-[#334EAC]"
                                        name="confirmPassword"
                                        type="password"
                                        className="w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <ButtonAtom
                                    type="submit"
                                    bgColor="#334EAC"
                                    textColor="#fff"
                                    className="w-full p-3 justify-center rounded-lg hover:bg-blue-700"
                                >
                                    Actualizar
                                </ButtonAtom>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default PasswordReset;
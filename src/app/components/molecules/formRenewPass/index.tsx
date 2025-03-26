
import React from "react";
import LabelAtom from "../../atoms/label";
import InputAtom from "../../atoms/input";
import ButtonAtom from "../../atoms/button";
import { Formik, Field, Form } from "formik";


const PasswordReset = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
            <div className="p-8 rounded-2xl w-full max-w-lg">
                <div className="flex flex-col items-center mb-6">
                    <img src="/path-to-your-image.jpg" alt="Password Icon" className="w-16 h-16 mb-4" />
                    <h2 className="text-3xl font-semibold text-[#334EAC]">Nuevas credenciales</h2>
                    <p className="text-[#081F5C]">Tu identidad fue verificada!, ingresa tu nueva contraseña</p>
                </div>
                <Formik
                    initialValues={{ password: '', confirmPassword: '' }}
                    onSubmit={(values) => {
                        console.log('Form values:', values);
                    }}
                >
                    {() => (
                        <Form className="space-y-4">
                            <div className="pr-8 pl-8 pt-6 pb-6 rounded-2xl border-1 border-[#334EAC] max-w-md">
                                <div className="flex items-center gap-2 mb-2">
                                    <img src="../public/mail-icon.svg" alt="Icon" className="w-6 h-6" />
                                    <LabelAtom text="Nueva contraseña" className="!text-[#334EAC]" />
                                </div>
                                <div className="relative">
                                    <Field
                                        name="password"
                                        type="password"
                                        as={InputAtom}
                                        className="w-full p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    <img src="../public/mail-icon.svg" alt="Icon" className="w-6 h-6" />
                                    <LabelAtom text="Confirmar contraseña" className="!text-[#334EAC]" />
                                </div>
                                <div className="relative">
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        as={InputAtom}
                                        className="w-full p-3 mb-4 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <ButtonAtom
                                    type="submit"
                                    className="w-full p-3 justify-center bg-[#334EAC] text-white rounded-lg hover:bg-blue-700"
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
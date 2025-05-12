"use client";

import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputAtom from "../../atoms/input";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";
import ErrorMessageAtom from "../../atoms/errorMessage";

interface FormResetPasswordProps {
  className?: string;
  email?: string;
}

const CODE_LENGTH = 6;

const validationSchema = Yup.object().shape({
  code: Yup.string()
    .required("El código es obligatorio")
    .matches(/^\d{6}$/, "El código debe tener 6 dígitos numéricos"),
});

const FormResetPassword: React.FC<FormResetPasswordProps> = ({
  email = "email",
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  return (
    <article className="justify-center flex">
      <div className="flex flex-col items-center justify-center text-center w-xl">
        <LabelAtom
          className="py-2 lg:justify-center leading-none max-w-sm sm:max-w-none"
          as="h2"
          text="Restablecer contraseña"
          fontSize="text-[40px] sm:text-[30px]  lg:text-[40px]"
          fontWeight={800}
          textColor="#334EAC"
          fontFamily="BlackMango"
        />
        <div className="text-center justify-center flex items-center flex-wrap gap-1 m-2 md:mb-6 w-xl max-w-[300px] md:max-w-none">
          <LabelAtom
            as="p"
            fontSize="text-md sm:text-base lg:text-xl"
            text="Se envió un correo a"
            fontWeight={300}
            textColor="#081F5C"
            fontFamily="Poppins"
          />
          <LabelAtom
            as="p"
            fontSize="text-md sm:text-base lg:text-xl"
            text={`${email},`}
            fontWeight={600}
            textColor="#081F5C"
            fontFamily="Poppins"
          />
          <LabelAtom
            as="p"
            fontSize="text-md sm:text-base lg:text-xl"
            text="introduce tu código"
            fontWeight={300}
            textColor="#081F5C"
            fontFamily="Poppins"
          />
        </div>
        <div className="p-6 flex flex-col items-center justify-center sm:border border-[#334EAC] rounded-[25px] mx-auto bg-white md:w-[500px] md:h-[240px]">
          <LabelAtom
            className="mb-4"
            as="h3"
            text="Código de seguridad"
            fontWeight={600}
            fontSize="text-[20px]"
            textColor="#334EAC"
            fontFamily="Poppins"
          />
          <Formik
            initialValues={{ code: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
            }}
          >
            {({ values, errors, touched, setFieldValue, handleBlur }) => (
              <Form className=" flex flex-col items-center">
                <div className="flex justify-between  gap-2 mb-2">
                  {Array.from({ length: CODE_LENGTH }).map((_, i) => (
                    <Field name={`code`} key={i}>
                      {({ field }: any) => (
                        <InputAtom
                          name={`code-${i}`}
                          type="text"
                          value={values.code[i] || ""}
                          maxLength={1}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "");
                            if (!val) {
                              if (i > 0) {
                                inputRefs.current[i - 1]?.focus();
                              }
                              return;
                            }
                            const newCode =
                              values.code.substring(0, i) +
                              val[val.length - 1] +
                              values.code.substring(i + 1);
                            setFieldValue(
                              "code",
                              newCode.padEnd(CODE_LENGTH, "")
                            );
                            if (val && i < CODE_LENGTH - 1) {
                              inputRefs.current[i + 1]?.focus();
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Backspace") {
                              e.preventDefault();

                              if (values.code[i]) {
                                const newCode =
                                  values.code.substring(0, i) +
                                  values.code.substring(i + 1);
                                setFieldValue(
                                  "code",
                                  newCode.padEnd(CODE_LENGTH, "")
                                );
                              } else if (i > 0) {
                                const newCode =
                                  values.code.substring(0, i - 1) +
                                  values.code.substring(i);
                                setFieldValue(
                                  "code",
                                  newCode.padEnd(CODE_LENGTH, "")
                                );
                                inputRefs.current[i - 1]?.focus();
                              }
                            }
                          }}
                          onBlur={handleBlur}
                          className={
                            "w-full h-[85px] text-center text-xl font-semibold border-1 border-[#334EAC] focus:ring-2 focus:ring-[#334EAC]" +
                            (errors.code && touched.code
                              ? " border-red-500"
                              : "")
                          }
                          colorBG="#E7F1FF"
                          fontFamily="Poppins"
                          ref={(el: HTMLInputElement | null) => {
                            if (el) inputRefs.current[i] = el;
                          }}
                          aria-label={`Dígito ${i + 1} del código`}
                          autoComplete="one-time-code"
                        />
                      )}
                    </Field>
                  ))}
                </div>
                <ErrorMessageAtom
                  message={touched.code && errors.code ? errors.code : ""}
                  isVisible={!!(touched.code && errors.code)}
                />
                <ButtonAtom
                  className="justify-center rounded-md mt-4 w-full"
                  type="submit"
                  text="Confirmar"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </article>
  );
};

export default FormResetPassword;

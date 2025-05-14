"use client";
import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ButtonAtom from "../../atoms/button";
import InputAtom from "../../atoms/input";
import LabelAtom from "../../atoms/label";
import ErrorMessageAtom from "../../atoms/errorMessage";

const CODE_LENGTH = 6;

const validationSchema = Yup.object().shape({
  code: Yup.string()
    .required("El código es obligatorio")
    .matches(/^\d{6}$/, "El código debe tener 6 dígitos numéricos"),
});

const FormConfirmMail = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  return (
    <article className="justify-center flex flex-col items-center">
      <LabelAtom
        as="h2"
        fontFamily="BlackMango"
        fontSize="text-[35px] md:text-[40px] max-w-sm sm:max-w-none leading-none"
        textColor="#334EAC"
        className="text-center"
        fontWeight={800}
        text="Confirma tu cuenta"
      />

      <LabelAtom
        className="pb-10 pt-1 text-center"
        as="p"
        fontFamily="Poppins"
        fontSize="text-md sm:text-base lg:text-[16px]"
        fontWeight={300}
        textColor="#081f5c"
        text="En su correo llegó un código para confirmar la cuenta"
      />

      <div className="rounded-[25px] md:p-8 flex-col flex justify-center w-full max-w-[500px] h-auto md:h-[240px] md:border border-[#334EAC]">
        <LabelAtom
          className="mb-4 justify-center"
          as="h3"
          fontFamily="Poppins"
          fontSize="text-[20px]"
          fontWeight={600}
          textColor="#334EAC"
          text="Código de seguridad"
        />
        <Formik
          initialValues={{ code: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Código enviado:", values);
            setSubmitting(false);
          }}
        >
          {({ values, errors, touched, setFieldValue, handleBlur }) => (
            <Form className="flex flex-col items-center">
              <div className="flex justify-between gap-2 mb-2">
                {Array.from({ length: CODE_LENGTH }).map((_, i) => (
                  <Field name={`code`} key={i}>
                    {() => (
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
                          (errors.code && touched.code ? " border-red-500" : "")
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
                type="submit"
                className="w-full py-3 font-medium rounded-[8px] text-center flex justify-center text-[14px] md:text-[14px] mt-4"
                bgColor="#334EAC"
                textColor="#FFFFFF"
                fontFamily="Poppins"
                fontWeight={600}
                hoverColor="#081F5C"
                text="Confirmar"
              />
            </Form>
          )}
        </Formik>
      </div>
    </article>
  );
};

export default FormConfirmMail;

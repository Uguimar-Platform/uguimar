import React, { useState } from 'react'
import Button from '../../atoms/button'
import LabelAtom from '../../atoms/label'
import FormCodePass from '../../molecules/formCodePass'
import { Form, Formik } from 'formik'
import InputAtom from '../../atoms/input'
import ButtonAtom from '../../atoms/button'

const ConfirmAccount = () => {

  const [code] = useState<string[]>(new Array(6).fill(''));

  return (
    <section className='mx-5 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-44 bg-[#F9FCFF] py-3 sm:py-4 px-3 sm:px-4 rounded-lg sm:rounded-2xl'>
      <Button
        textColor="#334EAC"
        icon='ArrowLeft'
        bgColor="#F9FCFF"
        className="rounded-lg px-3 sm:px-6 mx-2 sm:mx-5 border border-[#334EAC] text-sm sm:text-base"
        fontFamily="SFProDisplay"
        fontWeight={500}
      >
        Volver   
      </Button>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-5xl mx-auto items-center'>
      <div className="flex flex-col items-center mt-3 sm:mt-4 py-4 sm:py-8 px-4 sm:px-10 w-full bg-white rounded-lg">
          <img 
            src="/icon_cloude.webp" 
            alt="icon_cloude.webp"
            className='w-40 sm:w-60 md:w-72 lg:w-80 xl:w-[300px] h-auto mb-2 sm:mb-4'
          />
          <LabelAtom
            as="p"
            text="Aprende, crece y destaca con cursos prácticos y accesibles en un solo lugar."
            textColor="#334EAC"
            fontFamily="Onest"
            fontWeight={100}
            fontSize={20}
            className="text-center text-sm sm:text-base md:text-lg lg:text-xl"
          />
        </div>
        <div className='flex flex-col items-center py-4 sm:py-6'>
          <LabelAtom
            as="h1"
            text="Confirma tu cuenta"
            textColor="#334EAC"
            fontFamily="BlackMango"
            fontWeight={700}
            fontSize={30}
            className="text-center text-xl sm:text-2xl md:text-3xl"
          />
          <LabelAtom
            as="p"
            text="En su correo llegó un código para confirmar la cuenta"
            textColor="#334EAC"
            fontFamily="Onest"
            fontWeight={100}
            fontSize={14}
            className="text-center text-xs sm:text-sm mt-1 sm:mt-2"
          />

          <div className="flex flex-col items-center mt-4 py-6 px-8  border border-[#334EAC] rounded-[25px] max-w-sm mx-auto bg-white box-content">
            <LabelAtom
              className="mb-4"
              as="h3"
              text="Código de seguridad"
              fontWeight={600}
              fontSize={20}
              textColor="#334EAC"
              fontFamily="Poppins"
            />

            <Formik initialValues={{ code: "" }} onSubmit={(values) => {}}>
              <Form className="w-full flex flex-col items-center">
                <div className="flex gap-2 mb-5">
                  {code.map((val, i) => (
                    <InputAtom
                      key={i}
                      name={`code-input-${i}`}
                      type="text"
                      value={val}
                      className={"w-9 xl:w-14 h-10 xl:h-16 text-center text-xl font-semibold border-1 border-[#EE0707] focus:ring-2 focus:ring-[#EE0707]"}
                      colorBG='#E7F1FF'
                      fontFamily='Poppins'
                    />
                  ))}
                </div>
                <ButtonAtom
                  className="w-full justify-center rounded-md"
                  type="submit"
                >
                  Confirmar
                </ButtonAtom>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConfirmAccount

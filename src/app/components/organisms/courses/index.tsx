import React from "react";
import CardCourses from "../../molecules/cardCourses";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";

function Courses() {
  return (
    <div className=" min-h-screen px-4 py-8">
      <div className="flex flex-col-reverse md:flex-row max-w-7xl mx-auto">
        <div className="w-full md:w-[44%] lg:w-[40%] xl:w-[55%] flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="space-y-6">
              <CardCourses
                courseImage="/Course_Python.webp"
                alt="course1"
                courseName="Python"
                teacher="Juan Pérez"
                age="12 años"
                price="200"
                category="Programación"
              />
              <CardCourses
                courseImage="/Course_minecraft.webp"
                alt="course1"
                courseName="Python"
                teacher="Juan Pérez"
                age="12 años"
                price="200"
                category="Programación"
              />
            </div>

            <div className="space-y-6 mt-12 hidden xl:block">
              <CardCourses
                courseImage="/Course_Html.webp"
                alt="course1"
                courseName="Python"
                teacher="Juan Pérez"
                age="12 años"
                price="200"
                category="Programación"
              />
              <CardCourses
                courseImage="/course_web.webp"
                alt="course1"
                courseName="Python"
                teacher="Juan Pérez"
                age="12 años"
                price="200"
                category="Programación"
              />
            </div>
          </div>
        </div>
        
        <div className="relative w-full md:w-[56%] lg:w-[60%] xl:w-[45%] flex justify-center items-center text-center">
          <img
            src="/seahorse.webp"
            alt="seahorse"
            className="hidden lg:block absolute lg:right-[-35px] xl:right-[-90px] top-1/2 -translate-y-1/2 w-[120px]"
          />
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="/dolphin.webp"
              alt="dolphin"
              className="w-[380px] pb-[50px]"
            />
            <div className="flex flex-col items-center w-full">
              <LabelAtom
                as="h1"
                text="Abre las puertas al"
                textColor="text-black"
                fontFamily="BlackMango"
                fontWeight="bold"
                fontSize="text-[30px] lg:text-[35px]"
                className="leading-tight"
              />
              <div className="flex flex-wrap lg:flex-nowrap gap-2 justify-center">
                <LabelAtom
                  as="h1"
                  text="conocimiento"
                  textColor="#334EAC"
                  fontFamily="BlackMango"
                  fontWeight="bold"
                  fontSize="text-[30px] lg:text-[35px]"
                  className="leading-tight"
                />
                <LabelAtom
                  as="h1"
                  text="con"
                  textColor="text-black"
                  fontFamily="BlackMango"
                  fontWeight="bold"
                  fontSize="text-[30px] lg:text-[35px]"
                  className="leading-tight"
                />
                <LabelAtom
                  as="h1"
                  text="los"
                  textColor="text-black"
                  fontFamily="BlackMango"
                  fontWeight="bold"
                  fontSize="text-[30px] lg:text-[35px]"
                  className="leading-tight"
                />
              </div>
              <LabelAtom
                as="h1"
                text="cursos mejor certificados"
                textColor="text-black"
                fontFamily="BlackMango"
                fontWeight="bold"
                fontSize="text-[30px] lg:text-[35px]"
                className="leading-tight whitespace-nowrap"
              />
              <ButtonAtom
                bgColor="#F9FCFF"
                hoverColor="#E7E7E7"
                textColor="#081F5C"
                fontFamily="Onest"
                fontWeight={500}
                icon="ArrowRight"
                iconPosition="right"
                className="rounded-full px-8 py-3 mt-6 text-lg"
                text="Empezar gratis"
              />
            </div>
            <img src="/turtle.webp" alt="turtle" className="w-[300px] pt-[70px] mb-[40px] md:mb-[0px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

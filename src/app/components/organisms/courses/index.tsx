import React from "react";
import CardCourses from "../../molecules/cardCourses";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";

function Courses() {
  return (
    <div className=" min-h-screen ">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 space-x-36 justify-between items-start max-w-7xl mx-auto">
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6 col-span-2">
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

            <div className="space-y-6 mt-12 hidden lg:block">
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

        <div className="flex justify-center items-center h-full text-center">
          <div className="flex flex-col items-center justify-center">
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
                fontSize="text-[40px]"
                className="leading-tight"
              />
              <div className="flex flex-wrap lg:flex-nowrap gap-2 justify-center">
                <LabelAtom
                  as="h1"
                  text="conocimiento"
                  textColor="#334EAC"
                  fontFamily="BlackMango"
                  fontWeight="bold"
                  fontSize="text-[40px]"
                  className="leading-tight"
                />
                <LabelAtom
                  as="h1"
                  text="con"
                  textColor="text-black"
                  fontFamily="BlackMango"
                  fontWeight="bold"
                  fontSize="text-[40px]"
                  className="leading-tight"
                />
                <LabelAtom
                  as="h1"
                  text="los"
                  textColor="text-black"
                  fontFamily="BlackMango"
                  fontWeight="bold"
                  fontSize="text-[40px]"
                  className="leading-tight"
                />
              </div>
              <LabelAtom
                as="h1"
                text="cursos mejor certificados"
                textColor="text-black"
                fontFamily="BlackMango"
                fontWeight="bold"
                fontSize="text-[40px]"
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
            <img src="/turtle.webp" alt="turtle" className="w-[300px] pt-[70px]" />
          </div>
          <img
            src="/seahorse.webp"
            alt="seahorse"
            className="w-[150px] ml-[30px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Courses;

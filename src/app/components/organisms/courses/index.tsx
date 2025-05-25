import React from "react";
import CardCourses from "../../molecules/cardCourses";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";

function Courses() {
  return (
    <div className=" relative z-40 w-full ">
      <div className="grid grid-cols-3 gap-6 space-x-36 justify-between items-start max-w-7xl mx-auto">
        <div className="col-span-2 ">
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
              <CardCourses
                courseImage="/Course_PythonKids-.webp"
                alt="course1"
                courseName="Python"
                teacher="Juan Pérez"
                age="12 años"
                price="200"
                category="Programación"
              />
            </div>
            <div className="space-y-6 mt-12">
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
              <CardCourses
                courseImage="/Course_DesarrolloWeb.webp"
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

        <div className="flex items-center justify-center h-full">
          <div className="w-full">
            <LabelAtom
              as="h1"
              text="Abre las puertas al"
              textColor="text-black"
              fontFamily="SFProDisplay"
              fontWeight="bold"
              fontSize="text-[40px]"
              className="leading-tight"
            />
            <div className="flex space-x-6">
              <LabelAtom
                as="h1"
                text="conocimiento"
                textColor="#334EAC"
                fontFamily="SFProDisplay"
                fontWeight="bold"
                fontSize="text-[40px]"
                className="leading-tight"
              />
              <LabelAtom
                as="h1"
                text="con los"
                textColor="text-black"
                fontFamily="SFProDisplay"
                fontWeight="bold"
                fontSize="text-[40px]"
                className="leading-tight"
              />
            </div>
            <LabelAtom
              as="h1"
              text="cursos mejor certificados"
              textColor="text-black"
              fontFamily="SFProDisplay"
              fontWeight="bold"
              fontSize="text-[40px]"
              className="leading-tight whitespace-nowrap"
            />
            <ButtonAtom
              bgColor="#334EAC"
              hoverColor="#3B82F6"
              textColor="#FFFFFF"
              fontFamily="Onest"
              fontWeight={500}
              icon="ArrowRight"
              iconPosition="right"
              className="rounded-full px-8 py-3 mt-6 text-lg"
              text="Empezar gratis"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

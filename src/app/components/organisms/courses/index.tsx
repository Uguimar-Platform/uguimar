import React from "react";
import CardCourses from "../../molecules/cardCourses";
import LabelAtom from "../../atoms/label";
import ButtonAtom from "../../atoms/button";

function Courses() {
  return (
    <div className=" min-h-screen ">
      <div className="grid grid-cols-3 gap-6 space-x-36 justify-between items-start max-w-7xl mx-auto">
        {/* Left Section: Course Cards */}
        <div className="col-span-2 ">
          <div className="grid grid-cols-2 gap-6 col-span-2">
            {/* First Column */}
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
                courseImage="/Course_Python.webp"
                alt="course1"
                courseName="Python"
                teacher="Juan Pérez"
                age="12 años"
                price="200"
                category="Programación"
              />
              <CardCourses
                courseImage="/Course_Python.webp"
                alt="course1"
                courseName="Python"
                teacher="Juan Pérez"
                age="12 años"
                price="200"
                category="Programación"
              />
            </div>
            {/* Second Column with Offset */}
            <div className="space-y-6 mt-12">
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
                courseImage="/Course_Python.webp"
                alt="course1"
                courseName="Python"
                teacher="Juan Pérez"
                age="12 años"
                price="200"
                category="Programación"
              />
              <CardCourses
                courseImage="/Course_Python.webp"
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

        {/* Right Section: Promotional Text and Button */}
        <div className="flex items-center justify-center h-full">
          <div className="w-full">
            <LabelAtom
              as="h1"
              text="Abre las puertas al"
              textColor="text-black"
              fontFamily="SFProDisplay"
              fontWeight="bold"
              fontSize={40}
              className="leading-tight"
            />
            <div className="flex space-x-6">
              <LabelAtom
                as="h1"
                text="conocimiento"
                textColor="#334EAC"
                fontFamily="SFProDisplay"
                fontWeight="bold"
                fontSize={40}
                className="leading-tight"
              />
              <LabelAtom
                as="h1"
                text="con los"
                textColor="text-black"
                fontFamily="SFProDisplay"
                fontWeight="bold"
                fontSize={40}
                className="leading-tight"
              />
            </div>
            <LabelAtom
              as="h1"
              text="cursos mejor certificados"
              textColor="text-black"
              fontFamily="SFProDisplay"
              fontWeight="bold"
              fontSize={40}
              className="leading-tight whitespace-nowrap"
            />
            <ButtonAtom
              bgColor="#7096D1"
              hoverColor="#3B82F6"
              textColor="#FFFFFF"
              fontFamily="Onest"
              fontWeight={600}
              icon="ArrowRight"
              iconPosition="right"
              className="rounded-full px-8 py-3 mt-6 text-lg"
            >
              Empezar gratis
            </ButtonAtom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

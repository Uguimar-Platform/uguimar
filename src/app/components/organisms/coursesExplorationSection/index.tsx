"use client";
import { useState } from "react";
import CardCategoryCourses from "../../molecules/CardCategoryCourses";

function CoursesExplorationSection() {
  const [selectedCourse, setSelectedCourse] = useState("Javascript");

  const courses = [
    {
      id: "Javascript",
      svg: "/svg_explorationCourses_1.svg",
      title: "Programación con",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown-",
      image: "/img_explorationCourses_1.webp",
    },
    {
      id: "Arte",
      svg: "/svg_explorationCourses_2.svg",
      title: "Explora tu mente con",
      description:
        "Descubre el fascinante mundo del arte y aprende técnicas para plasmar tu creatividad en el lienzo.",
      image: "/img_explorationCourses_2.webp",
    },
    {
      id: "Geografía",
      svg: "/svg_explorationCourses_3.svg",
      title: "Investiguemos la",
      description:
        "Descubre los países, sus culturas y maravillas naturales a través de este curso de geografía.",
      image: "/img_explorationCourses_3.webp",
    },
    {
      id: "Química",
      svg: "/svg_explorationCourses_4.svg",
      title: "Experimenta con la",
      description:
        "Descubre los fundamentos de la química, desde la tabla periódica hasta reacciones sorprendentes que explican el mundo que nos rodea.",
      image: "/img_explorationCourses_4.webp",
    },
  ];

  const getArrowPosition = () => {
    const courseIndex = courses.findIndex(
      (course) => course.id === selectedCourse
    );

    switch (courseIndex) {
      case 0:
        return 0;
      case 1:
        return "150px";
      case 2:
        return "300px";
      case 3:
        return "470px";
      default:
        return 0;
    }
  };

  return (
    <section>
      <div className="flex justify-center space-x-40">
        <div className="flex flex-col space-y-18">
          {courses.map((course) => (
            <img
              key={course.id}
              src={course.svg}
              alt={`${course.id} icon`}
              onClick={() => setSelectedCourse(course.id)}
              className={`cursor-pointer transition-all ${selectedCourse === course.id ? "scale-110" : "opacity-70 hover:opacity-100"}`}
            />
          ))}
        </div>
        <div className="relative">
          <img
            src="/img_explorationCourses_5.webp"
            alt="Selection arrow"
            className="transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateY(${getArrowPosition()})`,
            }}
          />
        </div>
        <div>
          {courses.map(
            (course) =>
              selectedCourse === course.id && (
                <CardCategoryCourses
                  key={course.id}
                  title={course.title}
                  course={course.id}
                  description={course.description}
                  categorycourseimage={course.image}
                  buttonText="Ver curso"
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}

export default CoursesExplorationSection;

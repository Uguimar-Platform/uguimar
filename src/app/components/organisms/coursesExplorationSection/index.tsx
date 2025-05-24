"use client";
import { useState, useEffect } from "react";
import { useUserType } from "../../organisms/header";
import LabelAtom from "../../atoms/label";
import CardCategoryCourses from "../../molecules/CardCategoryCourses";


function CoursesExplorationSection() {
  const { userType } = useUserType();
  const isKid = userType === "child";

  const courses = isKid
    ? [
        {
          id: "Java",
          svg: "/svg_explorationCoursesKids_1.svg",
          title: "Programación con",
          description: "Texto de ejemplo para aprender programación.",
          image: "/img_explorationCoursesKids_2.webp",
        },
        {
          id: "Teatro",
          svg: "/svg_explorationCoursesKids_2.svg",
          title: "Explora tu creatividad con",
          description: "Aprende a expresarte en el escenario con confianza.",
          image: "/img_explorationCourses_2.webp",
        },
        {
          id: "Idiomas",
          svg: "/svg_explorationCoursesKids_3.svg",
          title: "Aprende nuevos",
          description: "Conoce idiomas nuevos de forma divertida.",
          image: "/img_explorationCourses_3.webp",
        },
        {
          id: "Ciencia",
          svg: "/svg_explorationCoursesKids_4.svg",
          title: "Experimenta con la",
          description: "Explora el mundo con experimentos sencillos.",
          image: "/img_explorationCourses_4.webp",
        },
      ]
    : [
        {
          id: "Javascript",
          svg: "/svg_explorationCourses_1.svg",
          title: "Programación con",
          description: "Aprende los fundamentos de Javascript.",
          image: "/img_explorationCourses_1.webp",
        },
        {
          id: "Arte",
          svg: "/svg_explorationCourses_2.svg",
          title: "Explora tu mente con",
          description: "Desarrolla tu creatividad con arte.",
          image: "/img_explorationCourses_2.webp",
        },
        {
          id: "Geografía",
          svg: "/svg_explorationCourses_3.svg",
          title: "Investiguemos la",
          description: "Conoce el mundo, sus países y culturas.",
          image: "/img_explorationCourses_3.webp",
        },
        {
          id: "Química",
          svg: "/svg_explorationCourses_4.svg",
          title: "Experimenta con la",
          description: "Entiende el mundo con reacciones químicas.",
          image: "/img_explorationCourses_4.webp",
        },
      ];

  const [selectedCourse, setSelectedCourse] = useState(courses[0].id);

  useEffect(() => {
    setSelectedCourse(courses[0].id);
  }, [userType]);

  const getArrowPosition = () => {
    const index = courses.findIndex((c) => c.id === selectedCourse);
    return `${60 + index * 150}px`;
  };

  const arrowImage = isKid
    ? "/img_explorationCoursesKids_1.webp"
    : "/img_explorationCourses_5.webp";

  const backgroundClasses = isKid
    ? "bg-gradient-to-b from-[#6FA2E0] to-white relative"
    : "";

  const headingColor = isKid ? "#0F2B66" : "#000";
  const titleColor = isKid ? "#1B3FCB" : "#334EAC";

  return (
    <section className={`pt-10 pb-20 px-4 sm:px-8 md:px-20 ${backgroundClasses}`}>
      {isKid && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('/img_cloud_bg.webp')] bg-repeat-x bg-bottom"></div>
      )}

      <div className="flex flex-wrap justify-center text-center mb-8 md:mb-12 pt-10 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]">
        <LabelAtom
          text="Explora nuevos"
          fontSize="text-3xl sm:text-4xl md:text-[48px]"
          fontWeight="bold"
          textColor={headingColor}
        />
        <LabelAtom
          text={isKid ? "CURSOS" : "cursos"}
          className="ml-2 font-bold"
          textColor={titleColor}
          fontSize="text-3xl sm:text-4xl md:text-[48px]"
        />
      </div>

      <div className="flex flex-row justify-center items-start space-x-10">
        <div className="flex flex-col space-y-10 w-[72px] min-w-[72px]">
          {courses.map((course) => (
            <img
              key={course.id}
              src={course.svg}
              alt={`${course.id} icon`}
              onClick={() => setSelectedCourse(course.id)}
              className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer transition-all ${
                selectedCourse === course.id
                  ? "scale-110"
                  : "opacity-70 hover:opacity-100"
              }`}
            />
          ))}
        </div>

        <div className="relative hidden md:block" style={{ height: "550px", width: "50px" }}>
          <img
            src={arrowImage}
            alt="Selection arrow"
            className="absolute transition-all duration-300 ease-in-out w-16 h-16 md:w-20 md:h-20"
            style={{
              top: getArrowPosition(),
              left: "0",
              transform: "translateY(-50%)",
            }}
          />
        </div>

        <div className="w-full max-w-lg px-4 md:px-0">
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
                  variant={isKid ? "kid" : "adult"}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}

export default CoursesExplorationSection;

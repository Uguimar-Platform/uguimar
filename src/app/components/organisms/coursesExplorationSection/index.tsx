"use client";
import { useState, useEffect } from "react";
import CardCategoryCourses from "../../molecules/CardCategoryCourses";
import LabelAtom from "../../atoms/label";

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
        return "60px";
      case 1:
        return "210px";
      case 2:
        return "360px";
      case 3:
        return "510px";
      default:
        return "10px";
    }
  };

  return (
    <section className="px-4 sm:px-8 md:px-20 pt-10 pb-20">
      <div className="flex flex-wrap justify-center text-center mb-8 md:mb-12">
        <LabelAtom text="Explora nuevos" fontSize="text-[40px] sm:text-[48px] md:text-[64px]" />
        <LabelAtom
          text="cursos"
          className="ml-3"
          textColor="#334EAC"
          fontSize="text-[40px] sm:text-[48px] md:text-[64px]"
        />
      </div>

      <div className="flex flex-row md:flex-row justify-center items-start space-x-10">
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

        <div
          className="relative hidden md:block"
          style={{ height: "550px", width: "50px" }}
        >
          <img
            src="/img_explorationCourses_5.webp"
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
                <div
                  key={course.id}
                  className="bg-white rounded-3xl shadow-xl p-6 border border-black max-w-full h-auto md:h-[600px]"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                        {course.title}
                      </h2>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B5FD9] mb-4 text-center">
                        {course.id}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl mb-6 text-center">
                        {course.description}
                      </p>
                      <div className="flex justify-center my-4">
                        <img
                          src={course.image}
                          alt={course.id}
                          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button className="bg-[#334EAC] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold">
                        Ver curso
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}

function CoursesExplorationSectionKids() {
  const [selectedCourse, setSelectedCourse] = useState("Java");

  const courses = [
    {
      id: "Java",
      svg: "/svg_explorationCoursesKids_1.svg",
      title: "Programación con",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown-",
      image: "/img_explorationCoursesKids_2.webp",
    },
    {
      id: "Teatro",
      svg: "/svg_explorationCoursesKids_2.svg",
      title: "Explora tu creatividad con",
      description:
        "Descubre el fascinante mundo del teatro y aprende técnicas para expresar tus emociones y desarrollar tu confianza.",
      image: "/img_explorationCourses_2.webp",
    },
    {
      id: "Idiomas",
      svg: "/svg_explorationCoursesKids_3.svg",
      title: "Aprende nuevos",
      description:
        "Descubre nuevos idiomas de forma divertida y aprende a comunicarte con personas de todo el mundo.",
      image: "/img_explorationCourses_3.webp",
    },
    {
      id: "Ciencia",
      svg: "/svg_explorationCoursesKids_4.svg",
      title: "Experimenta con la",
      description:
        "Descubre los fundamentos de la ciencia a través de experimentos divertidos que te ayudarán a entender el mundo que te rodea.",
      image: "/img_explorationCourses_4.webp",
    },
  ];

  const getArrowPosition = () => {
    const courseIndex = courses.findIndex(
      (course) => course.id === selectedCourse
    );
    switch (courseIndex) {
      case 0:
        return "60px";
      case 1:
        return "210px";
      case 2:
        return "360px";
      case 3:
        return "510px";
      default:
        return "10px";
    }
  };

  return (
    <section className="mt-20 pb-20 bg-gradient-to-b from-[#6FA2E0] to-white relative px-4 sm:px-8 md:px-20">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('/img_cloud_bg.webp')] bg-repeat-x bg-bottom"></div>

      <div className="flex flex-wrap justify-center text-center mb-8 md:mb-12 pt-10 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]">
        <LabelAtom
          text="Explora nuevos"
          fontSize="text-3xl sm:text-4xl md:text-[48px]"
          fontWeight="bold"
          textColor="#0F2B66"
        />
        <LabelAtom
          text="CURSOS"
          className="ml-2 font-bold"
          textColor="#1B3FCB"
          fontSize="text-3xl sm:text-4xl md:text-[48px]"
        />
      </div>

      <div className="flex flex-row md:flex-row justify-center items-start space-x-10">
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

        <div
          className="relative hidden md:block"
          style={{ height: "550px", width: "50px" }}
        >
          <img
            src="/img_explorationCoursesKids_1.webp"
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
                <div
                  key={course.id}
                  className="bg-white rounded-3xl shadow-xl p-6 border border-black max-w-full h-auto md:h-[600px]"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                        {course.title}
                      </h2>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B5FD9] mb-4 text-center">
                        {course.id}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl mb-6 text-center">
                        {course.description}
                      </p>
                      <div className="flex justify-center my-4">
                        <img
                          src={course.image}
                          alt={course.id}
                          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button className="bg-[#30B9C8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold">
                        Ver curso
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}

interface CombinedCoursesExplorationProps {
  className?: string;
  style?: React.CSSProperties;
  defaultUserType?: "adult" | "child";
  ageThreshold?: number;
  ageUser?: number;
}

const CombinedCoursesExploration: React.FC<CombinedCoursesExplorationProps> = ({
  className,
  style,
  defaultUserType = "child",
  ageThreshold = 18,
  ageUser,
}) => {
  const [userType, setUserType] = useState<"adult" | "child">(defaultUserType);
  const [age, setAge] = useState<number | null>(ageUser || null);

  useEffect(() => {
    if (ageUser !== undefined) {
      setAge(ageUser);
      setUserType(ageUser < ageThreshold ? "child" : "adult");
    }
  }, [ageUser, ageThreshold]);

  return (
    <div className={className} style={style}>
      {userType === "adult" ? (
        <CoursesExplorationSection />
      ) : (
        <CoursesExplorationSectionKids />
      )}
    </div>
  );
};

export { CoursesExplorationSection, CoursesExplorationSectionKids };
export default CombinedCoursesExploration;

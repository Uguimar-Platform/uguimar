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
      <div className="flex flex-row justify-center mb-12">
        <LabelAtom text="Explora nuevos" fontSize="text-[64px]" />
        <LabelAtom
          text="cursos"
          className="ml-3"
          textColor="#334EAC"
          fontSize="text-[64px]"
        />
      </div>
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
        return "60px";      // Primera posición
      case 1:
        return "210px";    // Segunda posición
      case 2:
        return "360px";    // Tercera posición
      case 3:
        return "510px";    // Cuarta posición
      default:
        return "10px";
    }
  };

  return (
    <section className="mt-20 pb-20 bg-gradient-to-b from-blue-50 to-white relative">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('/img_cloud_bg.webp')] bg-repeat-x bg-bottom"></div>
      <div className="flex flex-row justify-center mb-12 pt-10">
        <LabelAtom text="Explora nuevos" fontSize="text-[48px]" fontWeight="bold" textColor="#1E3A8A" />
        <LabelAtom text="CURSOS" className="ml-3 font-bold" textColor="#3B5FD9" fontSize="text-[48px]" />
      </div>
      <div className="flex justify-center space-x-40">
        <div className="flex flex-col space-y-10">
          {courses.map((course) => (
            <img
              key={course.id}
              src={course.svg}
              alt={`${course.id} icon`}
              onClick={() => setSelectedCourse(course.id)}
              className={`w-28 h-28 cursor-pointer transition-all ${selectedCourse === course.id ? "scale-110" : "opacity-70 hover:opacity-100"}`}
            />
          ))}
        </div>
        <div className="relative" style={{ height: "550px", width: "50px" }}>
          <img
            src="/img_explorationCoursesKids_1.webp"
            alt="Selection arrow"
            className="absolute transition-all duration-300 ease-in-out w-20 h-20"
            style={{
              top: getArrowPosition(),
              left: "0",
              transform: "translateY(-50%)"
            }}
          />
        </div>
        <div>
          {courses.map(
            (course) =>
              selectedCourse === course.id && (
                <div key={course.id} className="bg-white rounded-3xl shadow-xl p-6 w-[400px] h-[600px] border border-black">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h2 className="text-4xl font-bold">{course.title}</h2>
                      <h3 className="text-4xl font-bold text-[#3B5FD9] mb-4">{course.id}</h3>
                      <p className="text-xl mb-6">{course.description}</p>
                      <div className="flex justify-center my-6">
                        <img src={course.image} alt={course.id} className="w-48 h-48 object-contain" />
                      </div>
                    </div>
                    <div className="flex justify-center mt-auto">
                      <button className="bg-[#30B9C8] text-white px-8 py-3 rounded-full text-xl font-bold">
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

// Interfaz para las propiedades del componente combinado
interface CombinedCoursesExplorationProps {
  className?: string;
  style?: React.CSSProperties;
  defaultUserType?: "adult" | "child";
  ageThreshold?: number; // Edad límite para considerar niño o adulto
  ageUser?: number; // Propiedad para establecer la edad del usuario
}

// Componente combinado que muestra la sección de cursos según el tipo de usuario
const CombinedCoursesExploration: React.FC<CombinedCoursesExplorationProps> = ({
  className,
  style,
  defaultUserType = "adult",
  ageThreshold = 18,
  ageUser,
}) => {
  // Estado para controlar qué interfaz mostrar
  const [userType, setUserType] = useState<"adult" | "child">(defaultUserType);

  // Estado para la edad del usuario
  const [age, setAge] = useState<number | null>(ageUser || null);

  // Efecto para determinar el tipo de usuario basado en la edad cuando se proporciona ageUser
  useEffect(() => {
    if (ageUser !== undefined) {
      setAge(ageUser);
      setUserType(ageUser < ageThreshold ? "child" : "adult");
    }
  }, [ageUser, ageThreshold]);

  return (
    <div className={className} style={style}>
      {/* Renderizado condicional basado en el tipo de usuario */}
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

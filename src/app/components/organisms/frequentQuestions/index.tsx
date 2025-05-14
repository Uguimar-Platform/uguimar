import { Accordion } from "../../molecules/accordion";
import LabelAtom from "../../atoms/label";

function FrequentQuestions() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-42 p-0 lg:p-12">
      <div className="flex flex-col lg:max-w-[550px]">
        <div className="flex flex-col items-center lg:items-start">
          <LabelAtom
            text="¿Perdido? ¡Aquí las respuestas!"
            textColor="#081F5C"
            fontFamily="SFProDisplay"
            fontWeight="medium"
            fontSize="text-[22px] sm:text-[32px] md:text-[35px]"
            className="justify-center "
          />
          <LabelAtom
            text="Todo lo que necesitas saber sobre nuestra plataforma. ¿No encuentras lo que buscas? Contáctanos con nuestro equipo amigable."
            textColor="#081F5C"
            fontFamily="SFProDisplay"
            fontWeight="regular"
            className="opacity-50 max-w-[275px] sm:max-w-[500px] md:max-w-[600px] justify-center items-center text-center lg:text-left"
            fontSize="text-[15px] sm:text-[16px] md:text-[20px]"
          />
        </div>
        <img
          src="/img_FQ.webp"
          className="w-26 sm:w-28 md:w-36 h-auto mx-auto mt-5 mb-12 lg:mb-0"
          alt=""
        />
      </div>
      <div className="p-8 lg:p-0">
        <Accordion
          title="¿Qué es Guimar Academy?"
          content="Es una plataforma educativa intuitiva donde puedes aprender matemáticas, programación, historia y más, con cursos prácticos y accesibles para todos los niveles."
        />
        <Accordion
          title="¿Por qué debería usar esta plataforma si puedo aprender gratis en internet?"
          content="Ofrecemos cursos estructurados, certificados reconocidos y soporte experto, todo en un solo lugar, para ahorrarte tiempo y garantizar resultados."
        />
        <Accordion
          title="¿Puedo personalizar mi experiencia de aprendizaje?"
          content="Sí, elige tus cursos, ajusta tu ritmo y accede a recursos personalizados según tus necesidades."
        />
        <Accordion
          title="¿Cómo puedo empezar?"
          content="Regístrate gratis, explora nuestros cursos y comienza a aprender hoy mismo con solo un clic."
        />
      </div>
    </section>
  );
}

export default FrequentQuestions;

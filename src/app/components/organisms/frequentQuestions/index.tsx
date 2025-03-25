import { Accordion } from "../../molecules/accordion";
import LabelAtom from "../../atoms/label";

function FrequentQuestions() {
  return (
    <section className="flex justify-center space-x-42 ">
      <div className="">
        <div>
          <LabelAtom
            text="¿Perdido? ¡Aquí las respuestas!"
            textColor="#081F5C"
            fontFamily="SFProDisplay"
            fontWeight="medium"
            fontSize={40}
          />
          <LabelAtom
            text="Todo lo que necesitas saber sobre nuestra plataforma. ¿No encuentras lo que buscas? Contáctanos con nuestro equipo amigable."
            textColor="#081F5C"
            fontFamily="SFProDisplay"
            fontWeight="regular"
            className="opacity-50 max-w-[600px]"
            fontSize={20}
          />
        </div>
        <img src="/img_FQ.webp" className="" alt="" />
      </div>
      <div>
        <Accordion
          title="¿Qué es Guimar Academy?"
          content="Es una plataforma educativa intuitiva donde puedes aprender matemáticas, programación, historia y más, con cursos prácticos y accesibles para todos los niveles."
          titleFontFamily="SFProDisplay"
          contentFontWeight="regular"
          className="max-w-[420px] text-[#081F5C] mb-12"
        />
        <Accordion
          title="¿Por qué debería usar esta plataforma si puedo aprender gratis en internet?"
          content="Ofrecemos cursos estructurados, certificados reconocidos y soporte experto, todo en un solo lugar, para ahorrarte tiempo y garantizar resultados."
          titleFontFamily="SFProDisplay"
          contentFontWeight="regular"
          className="max-w-[420px] text-[#081F5C] mb-12"
        />
        <Accordion
          title="¿Puedo personalizar mi experiencia de aprendizaje?"
          content="Sí, elige tus cursos, ajusta tu ritmo y accede a recursos personalizados según tus necesidades."
          titleFontFamily="SFProDisplay"
          contentFontWeight="regular"
          className="max-w-[400px] text-[#081F5C] mb-12"
        />
        <Accordion
          title="¿Cómo puedo empezar?"
          content="Regístrate gratis, explora nuestros cursos y comienza a aprender hoy mismo con solo un clic."
          titleFontFamily="SFProDisplay"
          contentFontWeight="regular"
          className="max-w-[400px] text-[#081F5C] mb-12"
        />
      </div>
    </section>
  );
}

export default FrequentQuestions;

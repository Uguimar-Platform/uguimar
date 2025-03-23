import { Label } from "../../atoms/label";
import React from "react";
import Button from "../../atoms/button";
import InputAtom from "../../atoms/input";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col -gap-y-4">
        <Label
          text="Aprende, crece y "
          textColor="#202020"
          font="sf-pro"
          fontWeight={600}
          className="text-6xl"
        />
        <Label
          text="destaca"
          textColor="text-purple-500"
          font="sf-pro"
          fontWeight={600}
          className="text-6xl"
        />
        <Label
          text="con cursos transformadores"
          textColor="202020"
          font="sf-pro"
          fontWeight={600}
          className="text-6xl"
        />
      </div>
      <div>
        <Label
          text="Tu plataforma de aprendizaje: crece, explora y alcanza tus metas con cursos que transforman."
          as="p"
          font="sf-pro"
        />
      </div>
      <div> 
        
      </div>
    </section>
  );
};
export default Hero;

import React from "react";
import CardPlan from "../../molecules/cardPlan";
import LabelAtom from "../../atoms/label";
import { Section } from "lucide-react";

function Plans() {
  return (
    <Section className="flex flex-col items-center justify-center p-8">
        <div className="flex flex-row gap-4 mb-6">
        <LabelAtom
        as="h1"
        text="Escoge tu"
        textColor="000000"
        fontFamily="SFProDisplay"
        fontWeight="bold"
        fontSize={60}
      />
      <LabelAtom
        as="h1"
        text="plan"
        textColor="#334EAC"
        fontFamily="SFProDisplay"
        fontWeight="bold"
        fontSize={60}
      />
        </div>
        <LabelAtom
        as="p"
        text="Escoge uno de nuestros planes, para tí y para tus amigos"
        textColor="#7096D1"
        fontFamily="SFProDisplay"
        fontWeight={600}
        fontSize={20}
        className="mb-8"
      />
   
      <div className="flex flex-wrap justify-center gap-8 p-8">
        <CardPlan
          imageSrc={["/iconA_cardplan.webp"]}
          smallLabel="(1 persona)"
          title="Básico"
          price="100"
          features={[
            "Acceso completo a todos los cursos.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
          ]}
          buttonText="Elegir Plan"
          bgColor="bg-[#7096D1]"
          labelColor="#F9FCFF"
          textColor="#ffffff"
          buttonBgColor="#334EAC"
          buttonHoverColor="#081F5C"
          buttonTextColor="#ffffff"
        />
        <CardPlan
          imageSrc={["/iconB_cardplan.webp", "/iconB_cardplan.webp"]}
          smallLabel="(2 persona)"
          title="Básico"
          price="100"
          features={[
            "Acceso completo a todos los cursos.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
          ]}
          buttonText="Elegir Plan"
          bgColor="bg-[#FFFFFF]"
          labelColor="#081F5C"
          textColor="#081F5C"
          buttonBgColor="#EAEAEA"
          buttonHoverColor="#E7E7E7"
          buttonTextColor="#081F5C"
        />
        <CardPlan
          imageSrc={[
            "/iconA_cardplan.webp",
            "/iconA_cardplan.webp",
            "/iconA_cardplan.webp",
          ]}
          smallLabel="(1 persona)"
          title="Básico"
          price="100"
          features={[
            "Acceso completo a todos los cursos.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
          ]}
          buttonText="Elegir Plan"
          bgColor="bg-[#334EAC]"
          labelColor="#F9FCFF"
          textColor="#ffffff"
          buttonBgColor="#7096D1"
          buttonHoverColor="#081F5C"
          buttonTextColor="#ffffff"
        />
      </div>
    </Section>
  );
}

export default Plans;

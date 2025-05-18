"use client";
import React from "react";
import CardPlan from "../../molecules/cardPlan";
import LabelAtom from "../../atoms/label";

function Plans() {
  return (
    <section className="flex flex-col items-center justify-center p-8">
      <div className="flex flex-row gap-4 mb-6">
        <LabelAtom
          as="h1"
          text="Escoge tu"
          textColor="000000"
          fontFamily="SFProDisplay"
          fontWeight="bold"
          fontSize="text-[60px]"
        />
        <LabelAtom
          as="h1"
          text="plan"
          textColor="#334EAC"
          fontFamily="SFProDisplay"
          fontWeight="bold"
          fontSize="text-[60px]"
        />
      </div>
      <LabelAtom
        as="p"
        text="Escoge uno de nuestros planes, para tí y para tus amigos"
        textColor="#7096D1"
        fontFamily="SFProDisplay"
        fontWeight={600}
        fontSize="text-[20px]"
        className="mb-16 -mt-4"
      />

      <div className="flex flex-wrap justify-center gap-8 p-8">
        <CardPlan
          imageSrc={["/iconA_cardplan.webp"]}
          smallLabel="(1 persona)"
          title="Básico"
          price="200"
          features={[
            "Acceso completo a todos los cursos.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
          ]}
          buttonText="Adquirir"
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
          buttonText="Adquirir"
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
          buttonText="Adquirir"
          bgColor="bg-[#334EAC]"
          labelColor="#F9FCFF"
          textColor="#ffffff"
          buttonBgColor="#7096D1"
          buttonHoverColor="#081F5C"
          buttonTextColor="#ffffff"
        />
      </div>
    </section>
  );
}

function PlansChildren() {
  return (
    <section className="flex flex-col items-center justify-center p-8 bg-[url('/bg_plansChildren.svg')] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-row gap-4 mb-6">
        <LabelAtom
          as="h1"
          text="Escoge "
          textColor="#7196D1"
          fontFamily="SFProDisplay"
          fontWeight="bold"
          fontSize="text-[60px]"
        />
        <LabelAtom
          as="h1"
          text="tu Plan"
          textColor="#000000"
          fontFamily="SFProDisplay"
          fontWeight="bold"
          fontSize="text-[60px]"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-8">
        <CardPlan
          imageSrc={["/iconA_cardplan.webp"]}
          smallLabel="(1 persona)"
          title="Básico"
          price="200"
          features={[
            "Acceso completo a todos los cursos.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
          ]}
          buttonText="Adquirir"
          bgColor="bg-[#E7F1FF]"
          labelColor="#000000"
          textColor="#000000"
          buttonBgColor="#CBD4E1"
          buttonHoverColor="#AFD0FF"
          buttonTextColor="#000000"
        />
        <CardPlan
          imageSrc={["/iconA_cardplan.webp", "/iconA_cardplan.webp"]}
          smallLabel="(2 persona)"
          title="Duo"
          price="200"
          features={[
            "Acceso completo a todos los cursos.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
          ]}
          buttonText="Adquirir"
          bgColor="bg-[#D0E3FF]"
          labelColor="#0000000"
          textColor="#081F5C"
          buttonBgColor="#B6C5DA"
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
          title="Expert"
          price="500"
          features={[
            "Acceso completo a todos los cursos.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
            "Certificado de finalización.",
            "Recompensas por suscripción continuada.",
          ]}
          buttonText="Adquirir"
          bgColor="bg-[#7096D1]"
          labelColor="#ffffff"
          textColor="#ffffff"
          buttonBgColor="#6883AE"
          buttonHoverColor="#081F5C"
          buttonTextColor="#ffffff"
        />
      </div>
    </section>
  );
}

export default Plans;
export { PlansChildren };

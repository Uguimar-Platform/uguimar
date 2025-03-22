import Image from "next/image";
import React from "react";
import LinkAtom from "../../atoms/links";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-none p-6">
      {/* 📌 Versión Web (Visible en pantallas medianas en adelante) */}
      <div className="hidden md:flex items-center justify-center gap-10 w-full">
        {/* Logo */}
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />

        {/* Contenedor de enlaces */}
        <div className="flex gap-6">
          <LinkAtom to="/terms" label="Términos y condiciones" />
          <LinkAtom to="/whatsapp" label="WhatsApp" />
          <LinkAtom to="/instagram" label="Instagram" />
          <LinkAtom to="/facebook" label="Facebook" />
          <LinkAtom to="/youtube" label="YouTube" />
        </div>
      </div>

      {/* 📌 Versión Móvil (Visible solo en pantallas pequeñas) */}
      <div className="flex md:hidden flex-col items-center gap-4 text-center">
        {/* Logo */}
        <Image src="/logo.svg" alt="Logo" width={80} height={80} />

        {/* Enlace de Términos y Condiciones */}
        <LinkAtom to="/terms" label="Términos y condiciones" />

        {/* Contenedor de redes sociales en 2 columnas */}
        <div className="grid grid-cols-2 gap-4">
          <LinkAtom to="/whatsapp" label="WhatsApp" />
          <LinkAtom to="/instagram" label="Instagram" />
          <LinkAtom to="/facebook" label="Facebook" />
          <LinkAtom to="/youtube" label="YouTube" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

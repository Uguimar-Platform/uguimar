import Image from "next/image";
import React from "react";
import LinkAtom from "../../atoms/links";

/**
 * Footer component that represents the application's footer.
 * Contains the logo and links to different pages and social media.
 * Adapts to different screen sizes with specific designs for mobile and desktop.
 */
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-none p-6">
      {/*
       * Version for medium and large screens (desktop)
       * Displays the logo and links in a horizontal layout
       */}
      <div className="hidden md:flex items-center justify-center gap-10 w-full">
        <Image src="/Logo.webp" alt="Logo" width={100} height={100} />

        <div className="flex gap-6 text-[#334EAC] font-style: italic">
          <LinkAtom to="/terms" label="Términos y condiciones" />
          <LinkAtom to="/whatsapp" label="WhatsApp" />
          <LinkAtom to="/instagram" label="Instagram" />
          <LinkAtom to="/facebook" label="Facebook" />
          <LinkAtom to="/youtube" label="YouTube" />
        </div>
      </div>

      {/*
       * Version for mobile devices
       * Organizes elements in a vertical column with the logo at the top
       * and social links in a 2-column grid
       */}
      <div className="flex md:hidden flex-col items-center gap-4 text-center">
        <Image src="/logo.svg" alt="Logo" width={80} height={80} />

        <LinkAtom to="/terms" label="Términos y condiciones" />

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

"use client"; // Importante para componentes interactivos en Next.js

import Link from "next/link";
import React from "react";

interface LinkProps {
  to: string;
  label: string;
}

const LinkAtom: React.FC<LinkProps> = ({ to, label }) => {
  return (
    <Link href={to} className="inline-block p-2 text-sm rounded">
      {label}
    </Link>
  );
};

export default LinkAtom;

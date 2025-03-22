"use client"; // Importante para componentes interactivos en Next.js

import Link from "next/link";
import React from "react";

interface SidebarLinkProps {
  to: string;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, label }) => {
  return (
    <Link href={to} className="inline-block p-2 text-sm rounded">
      {label}
    </Link>
  );
};

export default SidebarLink;

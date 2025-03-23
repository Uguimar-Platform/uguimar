"use client";

import Link from "next/link";
import React from "react";

interface LinkProps {
  to: string;
  label: string;
  className?: string;
}

const LinkAtom: React.FC<LinkProps> = ({ to, label, className = "" }) => {
  return (
    <Link
      href={to}
      className={`inline-block p-2 text-lg font-medium ${className}`}
    >
      {label}
    </Link>
  );
};

export default LinkAtom;

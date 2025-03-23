"use client";

import Link from "next/link";
import React from "react";

/**
 * Interface that defines the properties for the LinkAtom component.
 *
 * @param to The destination URL where the link will direct to.
 * @param label The text that will be displayed in the link.
 * @param className Optional CSS classes to customize the link's style.
 */
interface LinkProps {
  to: string;
  label: string;
  className?: string;
}

/**
 * Atomic component that represents a navigation link.
 * Uses Next.js Link component to handle client-side navigation.
 *
 * @param to The destination URL where the link will direct to.
 * @param label The text that will be displayed in the link.
 * @param className Optional CSS classes to customize the link's style.
 * @returns A styled link component with the provided properties.
 */
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

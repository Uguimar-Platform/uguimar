"use client";

import Link from "next/link";
import React from "react";

/**
 * Props for the LinkAtom component.
 */
interface LinkProps {
  /** The URL or path to navigate to (used as the `href` for Next.js Link). */
  to: string;
  /** The text to display as the link label. */
  label: string;
}

/**
 * A reusable link component for navigation in Next.js applications.
 * 
 * The LinkAtom component renders a styled link using Next.js's `Link` component.
 * It provides a simple way to create navigable links with a consistent appearance,
 * using Tailwind CSS for default styling (padding, text size, and rounded corners).
 * The component is designed for use in Next.js applications and requires the `"use client"` directive
 * for client-side interactivity.
 * 
 * @example
 * ```tsx
 * import LinkAtom from "./LinkAtom";
 * 
 * // Basic usage for a navigation link
 * <LinkAtom
 *   to="/about"
 *   label="About Us"
 * />
 * ```
 * 
 * @remarks
 * - This component uses Tailwind CSS for default styling (e.g., `inline-block`, `p-2`, `text-sm`, `rounded`).
 * - The `"use client"` directive is required because `next/link` relies on client-side functionality.
 * - Accessibility is handled by Next.js's `Link` component, but you can enhance it by adding `aria-label` if needed.
 */
const LinkAtom: React.FC<LinkProps> = ({ to, label }) => {
  return (
    <Link href={to} className="inline-block p-2 text-sm rounded">
      {label}
    </Link>
  );
};

export default LinkAtom;
import React, { isValidElement, cloneElement } from "react";

export type LabelProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "label" | "p" | "span";
  htmlFor?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  style?: React.CSSProperties; // Para estilos en línea (como colores HEX)
};

export const Label: React.FC<LabelProps> = ({
  text,
  as = "label",
  htmlFor,
  icon,
  iconPosition = "left",
  className = "",
  style,
}) => {
  const Tag = as;

  // Detectar si el ícono es válido
  const isIconElement = isValidElement(icon);

  // Clonar el ícono y aplicarle tamaño y margen según su posición
  const iconWithMargin =
    isIconElement && iconPosition === "left"
      ? cloneElement(icon as React.ReactElement<any>, {
          className: `text-xl mr-1 ${(icon as React.ReactElement<any>).props.className || ""}`,
        })
      : isIconElement && iconPosition === "right"
      ? cloneElement(icon as React.ReactElement<any>, {
          className: `text-xl ml-1 ${(icon as React.ReactElement<any>).props.className || ""}`,
        })
      : icon;

  return (
    <Tag
      {...(as === "label" ? { htmlFor } : {})}
      className={`py-2 px-2 m-2 inline-flex items-center transition duration-300 ease-in-out flex-row ${className}`}
      style={style} // Aplicamos estilos en línea directamente
    >
      {iconPosition === "left" && iconWithMargin}
      <span>{text}</span>
      {iconPosition === "right" && iconWithMargin}
    </Tag>
  );
};
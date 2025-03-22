import React, { isValidElement, cloneElement } from "react";
export type FontFamily =
  | "poppins"
  | "onest"
  | "black-mango"
  | "sf-pro"
  | string;
export type LabelProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "label" | "p" | "span";
  htmlFor?: string;
  textColor?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  font?: FontFamily;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  style?: React.CSSProperties; // Para estilos en línea (como colores HEX)
};

export const Label: React.FC<LabelProps> = ({
  text,
  as = "label",
  htmlFor,
  icon,
  iconPosition = "left",
  textColor = "text-black",
  font = "poppins",
  fontWeight = 400,
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

  // Mapeo para los nombres de fuentes
  const fontFamilyMap = {
    poppins: "Poppins",
    onest: "Onest",
    "black-mango": "Black Mango",
    "sf-pro": "SF Pro Display",
  };

  // Obtener el nombre de la fuente del mapeo o usar el valor original
  const fontName = fontFamilyMap[font as keyof typeof fontFamilyMap] || font;

  // Estilo inline para la fuente y su peso
  const fontStyle = {
    fontFamily: `'${fontName}'`,
    fontWeight: fontWeight,
  };
  return (
    <Tag
      {...(as === "label" ? { htmlFor } : {})}
      className={`py-2 px-2 m-2 inline-flex items-center transition duration-300 ease-in-out flex-row ${textColor} ${className}`}
      style={fontStyle}
    >
      {iconPosition === "left" && iconWithMargin}
      <span>{text}</span>
      {iconPosition === "right" && iconWithMargin}
    </Tag>
  );
};

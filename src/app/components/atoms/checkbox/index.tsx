"use client";
import React from "react";
/**
 * Propiedades para el componente Checkbox.
 */
interface CheckboxProps {
  /** Texto de la etiqueta que se muestra junto a la casilla. */
  label?: string;
  /** Indica si la casilla está deshabilitada. */
  disabled?: boolean;
  /** Color del texto de la etiqueta en formato de clase de Tailwind CSS. */
  color?: string;
}
/**
 * Un componente de casilla de verificación personalizable con una etiqueta.
 *
 * El componente Checkbox permite crear una casilla de verificación estilizada con una etiqueta opcional.
 * Admite un estado deshabilitado y permite personalizar el color del texto de la etiqueta.
 *
 * @example
 * ```tsx
 * <Checkbox
 *   label="Acepto los términos y condiciones"
 *   disabled={false}
 *   color="text-[#334EAC]"
 * />
 * @notas
 * - Este componente utiliza Tailwind CSS para el estilo.
 * - La fuente "Poppins" se aplica al texto de la etiqueta; asegúrate de importarla en tu proyecto.
 * - El color de acento de la casilla de verificación está fijado en #334EAC y no se puede personalizar mediante props.
 */
const Checkbox: React.FC<CheckboxProps> = ({
  label = "",
  disabled = false,
  color = "text-[#081F5C]",
}) => {
  const id = React.useMemo(
    () => "checkbox-" + Math.random().toString(36).slice(2, 11),
    []
  );
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 cursor-pointer py-2 px-2 m-2 ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        className="w-4 h-4 accent-[#334EAC] rounded"
      />
      <span className={`${color} font-poppins`}>{label}</span>
    </label>
  );
};

export default Checkbox;

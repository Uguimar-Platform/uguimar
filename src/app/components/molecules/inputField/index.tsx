"use client";
import { Field, ErrorMessage as FormikErrorMessage } from "formik";
import ErrorMessage from "../../atoms/errorMessage";
import InputAtom from "../../atoms/input";
import { Label } from "../../atoms/label";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  style?: React.CSSProperties;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder = "",
  labelClassName = "",
  inputClassName = "",
  className = "",
  icon,
  iconPosition = "left",
  style,
}) => {
  return (
    <div className={`flex flex-col mb-7 relative ${className}`}>
      <Label
        text={label}
        htmlFor={name}
        icon={icon}
        iconPosition={iconPosition}
        className={labelClassName}
      />
      <Field
        as={InputAtom}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`border px-4 py-2 rounded-md ${inputClassName}`} // Aseguramos que las clases se apliquen
        style={style} // Pasamos los estilos en línea
      />
      <div className="min-h-[20px]">
        <FormikErrorMessage name={name} component={ErrorMessage} />
      </div>
    </div>
  );
};

export default InputField;
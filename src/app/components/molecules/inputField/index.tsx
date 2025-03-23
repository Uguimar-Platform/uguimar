"use client";
import { Field, ErrorMessage as FormikErrorMessage } from "formik";
import ErrorMessage from "../../atoms/errorMessage";
import InputAtom from "../../atoms/input";
import { Label } from "../../atoms/label";

/**
 * Interface that defines the properties for the InputField component.
 *
 * @param label Text to be displayed as the field label.
 * @param name Field name, used to identify it in the form.
 * @param type Input type (text, password, email, etc).
 * @param placeholder Placeholder text shown when the field is empty.
 * @param labelClassName Additional CSS classes for the label.
 * @param inputClassName Additional CSS classes for the input.
 * @param className Additional CSS classes for the container.
 * @param icon Icon to be displayed next to the label.
 * @param iconPosition Position of the icon ('left' or 'right').
 * @param style Inline CSS styles for the component.
 */
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

/**
 * Component that represents an input field with label and error message.
 * Integrates with Formik for form management.
 *
 * @param props The component properties as defined in InputFieldProps.
 * @returns An input field component with label and validation.
 */
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
        className={`border px-4 py-2 rounded-md ${inputClassName}`}
        style={style}
      />
      <div className="min-h-[20px]">
        <FormikErrorMessage name={name} component={ErrorMessage} />
      </div>
    </div>
  );
};

export default InputField;

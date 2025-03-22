"use client";

interface InputAtomProps {
  type?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

const InputAtom: React.FC<InputAtomProps> = ({
  //valores por defecto en caso el usuario no ingrese props
  placeholder = "",
  label = "",
  disabled = false,
  width = "100%",
  height = "40px",
  backgroundColor = "#ffffff",
}) => {

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          placeholder={placeholder}
          disabled={disabled}
          className="border-none rounded-md px-3 py-2 focus:outline-none w-full placeholder-gray-500"
          style={{
            width,
            height,
            backgroundColor,
          }}
        />
      </div>
    </div>
  );
};

export default InputAtom;

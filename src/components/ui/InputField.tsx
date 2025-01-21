import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  toggleVisibility?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, type, register, error, toggleVisibility }) => {
  const [isVisible, setIsVisible] = useState(false);

  const inputType = toggleVisibility && isVisible ? "text" : type;

  return (
    <div className="flex flex-col mt-4 relative">
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <input
          id={id}
          type={inputType}
          {...register}
          className={`border p-2 w-full ${error ? "border-red-500" : "border-gray-300"}`}
        />
        {toggleVisibility && (
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="absolute right-3 top-2 text-gray-500"
          >
            {isVisible ? <Eye/> : <EyeOff/>}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default InputField;

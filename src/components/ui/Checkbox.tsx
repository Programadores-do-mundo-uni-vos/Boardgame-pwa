import { UseFormRegisterReturn } from "react-hook-form";

interface CheckboxProps {
  label: string;
  register: UseFormRegisterReturn;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, register }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        {...register}
        className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
      />
      <label className="ml-2 text-gray-700">{label}</label>
    </div>
  );
};

export default Checkbox;

//common form field - now we can pass this wherever required

import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FormFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

export const FormField = ({
  label,
  name,
  id,
  placeholder,
  required,
  onChange,
  error,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};

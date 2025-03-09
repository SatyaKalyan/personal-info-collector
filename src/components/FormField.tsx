import React from "react";

interface FormFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default FormField;

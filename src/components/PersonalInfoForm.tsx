import React, { useState } from "react";
import FormField from "./FormField";

const PersonalInfoForm: React.FC = () => {  // ✅ No props needed
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): Record<string, string> => {
    const newErrors: Record<string, string> = {};
    if (!name) newErrors["name"] = "Name is required";
    if (!email) newErrors["email"] = "Email is required";
    if (!phone) newErrors["phone"] = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({ name, email, phone });

      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors["name"]}
      />
      <FormField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors["email"]}
      />
      <FormField
        label="Phone Number"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={errors["phone"]}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PersonalInfoForm;
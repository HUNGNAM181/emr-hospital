import { useState } from "react";

export interface ValidationRule<T> {
  validate: (values: T) => boolean;
  message: string;
}

export function useFormValidation<T>(values: T, rules: ValidationRule<T>[]) {
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    for (const rule of rules) {
      if (!rule.validate(values)) {
        setError(rule.message);
        return false;
      }
    }
    setError(null);
    return true;
  };

  return { error, validate };
}

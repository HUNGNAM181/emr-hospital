import { ReactNode, FormEvent } from "react";

interface PatientFormProps {
  children: ReactNode;
  onSubmit: (e: FormEvent) => void;
}

export function PatientForm({ children, onSubmit }: PatientFormProps) {
  return (
    <form onSubmit={onSubmit} className="mb-3 space-y-2" noValidate>
      {children}
    </form>
  );
}

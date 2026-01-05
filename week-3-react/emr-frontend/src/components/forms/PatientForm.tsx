import { ReactNode, FormEvent } from "react";

interface PatientFormShellProps {
  children: ReactNode;
  error: string | null;
  onSubmit: (e: FormEvent) => void;
}

export function PatientForm({
  children,
  error,
  onSubmit,
}: PatientFormShellProps) {
  return (
    <form onSubmit={onSubmit} className="mb-3">
      {error && <p className="text-danger">{error}</p>}
      {children}
    </form>
  );
}

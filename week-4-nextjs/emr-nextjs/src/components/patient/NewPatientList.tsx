"use client";
import { NewPatient } from "@/types/newPatient";
import { PatientCard } from "./PatientCard";

interface NewPatientListProps {
  patients: NewPatient[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

export function NewPatientList({
  patients,
  onEdit,
  onDelete,
}: NewPatientListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Danh sách bệnh nhân</h2>

        <span className="text-sm text-gray-500">
          {patients.length} bệnh nhân
        </span>
      </div>

      {patients.length === 0 && (
        <div className="rounded-lg border border-dashed p-8 text-center text-gray-500">
          Chưa có bệnh nhân nào
        </div>
      )}

      {patients.length > 0 && (
        <ul className="divide-y rounded-lg border bg-white shadow-sm">
          {patients.map((p, i) => (
            <PatientCard
              key={i}
              patient={p}
              index={i}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

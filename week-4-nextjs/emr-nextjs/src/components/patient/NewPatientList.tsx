"use client";
import { useState } from "react";
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
  const [showList, setShowList] = useState<boolean>(true);

  return (
    <div className="mt-4 text-center">
      <h4 className="text-lg font-semibold mb-2">Danh sách bệnh nhân</h4>

      <button
        className={`px-3 py-2 rounded-md text-white mb-3 ${
          showList
            ? "bg-red-600 hover:bg-red-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
        onClick={() => setShowList((prev) => !prev)}
      >
        {showList ? "Hide List" : "Show List"}
      </button>

      {showList && (
        <div className="mx-auto max-w-xl">
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
        </div>
      )}
    </div>
  );
}

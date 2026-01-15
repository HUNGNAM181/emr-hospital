import { useState } from "react";
import { NewPatient } from "../../models/newPatient";
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
    <div className="container mt-3 text-center">
      <h4>Danh sách bệnh nhân</h4>

      <button
        className={`btn mb-3 ${showList ? "btn-danger" : "btn-primary"}`}
        onClick={() => setShowList((prev) => !prev)}
      >
        {showList ? "Hide List" : "Show List"}
      </button>

      {showList && (
        <div className="mx-auto" style={{ width: "fit-content" }}>
          <ul className="list-group">
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

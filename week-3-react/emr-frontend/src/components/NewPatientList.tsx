import { useState } from "react";
import { NewPatient } from "../models/newPatient";

interface NewPatientListProps {
  patients: NewPatient[];
}

export function NewPatientList({ patients }: NewPatientListProps) {
  const [showList, setShowList] = useState<boolean>(true);

  return (
    <div className="container mt-3 text-center">
      <h4>Danh sách bệnh nhân mới</h4>
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
              <li key={i} className="list-group-item">
                <strong>{p.name}</strong> — {p.age} tuổi — {p.gender} |
                <span className="ms-1">Phone: {p.phone}</span> |
                <span className="ms-1">Address: {p.address}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

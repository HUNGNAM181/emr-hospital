import { useState } from "react";
import { NewPatient } from "../../models/newPatient";

interface NewPatientListProps {
  patients: NewPatient[];
  onEdit: (index: number) => void; // 👈 thêm prop Edit
}

export function NewPatientList({ patients, onEdit }: NewPatientListProps) {
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
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center gap-2"
              >
                <div>
                  <strong>{p.name}</strong> — {p.age} tuổi — {p.gender} |
                  <span className="ms-1">Phone: {p.phone}</span> |
                  <span className="ms-1">Address: {p.address}</span>
                </div>

                <button
                  className="btn btn-warning btn-sm ms-3  "
                  onClick={() => onEdit(i)}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

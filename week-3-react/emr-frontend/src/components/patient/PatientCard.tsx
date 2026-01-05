import { NewPatient } from "../../models/newPatient";

export function PatientCard({
  patient,
  index,
  onEdit,
  onDelete,
}: {
  patient: NewPatient;
  index: number;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{patient.name}</strong> — {patient.age} tuổi — {patient.gender}{" "}
        |<span className="ms-1">Phone: {patient.phone}</span> |
        <span className="ms-1">Address: {patient.address}</span>
      </div>

      <div className="d-flex align-items-center gap-2 ms-3">
        <button
          className="btn btn-warning btn-sm"
          onClick={() => onEdit(index)}
        >
          Edit
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

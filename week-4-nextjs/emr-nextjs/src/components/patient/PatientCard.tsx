import { NewPatient } from "@/types/newPatient";

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
    <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-4 py-3">
      <div className="text-sm">
        <strong className="font-semibold">{patient.name}</strong> —{" "}
        {patient.age} tuổi — {patient.gender}
        <span className="ml-1">| Phone: {patient.phone}</span>
        <span className="ml-1">| Address: {patient.address}</span>
      </div>

      <div className="flex gap-2 sm:ml-3">
        <button
          className="px-3 py-1 text-sm rounded-md bg-yellow-400 hover:bg-yellow-500 text-black"
          onClick={() => onEdit(index)}
        >
          Edit
        </button>

        <button
          className="px-3 py-1 text-sm rounded-md bg-red-600 hover:bg-red-700 text-white"
          onClick={() => onDelete(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

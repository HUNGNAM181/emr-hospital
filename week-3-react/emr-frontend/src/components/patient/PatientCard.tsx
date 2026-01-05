import { Patient } from "../../models/patient";

export function PatientCard({ patient }: { patient: Patient }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title fw-bold">{patient.name}</h5>

        <p className="mb-1">
          <span className="fw-semibold">Tuổi:</span> {patient.age}
        </p>

        <p className="mb-1">
          <span className="fw-semibold">Giới tính:</span> {patient.gender}
        </p>

        <p className="mb-1">
          <span className="fw-semibold">Trạng thái:</span>{" "}
          <span className="badge bg-primary">{patient.status}</span>
        </p>

        <p className="mb-0">
          <span className="fw-semibold">Số hồ sơ bệnh án:</span>{" "}
          {patient.records.length}
        </p>
      </div>
    </div>
  );
}

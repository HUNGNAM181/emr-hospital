import { Patient } from "../models/patient";

export function PatientCard({ patient }: { patient: Patient }) {
  return (
    <>
      <h3>{patient.name}</h3>
      <p>Tuổi : {patient.age}</p>
      <p>Giới tính: {patient.gender}</p>
      <p>Trạng thái: {patient.status}</p>
      <p>Số hồ sơ bệnh án: {patient.records.length}</p>
    </>
  );
}

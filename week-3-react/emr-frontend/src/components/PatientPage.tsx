import { PatientCard } from "./PatientCard";
import { patients } from "../data/patients";

export function PatientPage() {
  return (
    <>
      {patients.map((patient) => (
        <PatientCard patient={patient} key={patient.id} />
      ))}
    </>
  );
}

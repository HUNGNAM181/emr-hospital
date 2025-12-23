import { Patient } from "./models/patient";
import { Role } from "./models/role";

function addNewPatient(patients: Patient[], newPatient: Patient): Patient[] {
  return [...patients, newPatient];
}
function updatePatient(
  patients: Patient[],
  id: string,
  updateInfo: Partial<Patient>
): Patient[] {
  return patients.map((patient) =>
    patient.id === id ? { ...patient, ...updateInfo } : patient
  );
}
function deletePatient(patients: Patient[], id: string): Patient[] {
  return patients.filter((patient) => patient.id !== id);
}

function searchPatient(
  patients: Patient[],
  keyword: string
): Patient | undefined {
  return patients.find(
    (patient) => patient.id === keyword || patient.name === keyword
  );
}

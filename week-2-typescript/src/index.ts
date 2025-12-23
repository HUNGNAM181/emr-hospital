import { Patient } from "./models/patient";
import { Role } from "./models/role";

// ===================== DATA =====================
const patients: Patient[] = [
  { id: "1", name: "Nguyễn Hưng Nam", age: 22, gender: "male" },
  { id: "2", name: "Bùi Thị Hà", age: 22, gender: "female" },
  { id: "3", name: "Bui Van Lam", age: 24, gender: "male" },
];

// ===================== FUNCTIONS =====================
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

function getPatientInfo(patient: Patient): string {
  return `${patient.name} - ${patient.age} tuổi - Giới tính: ${patient.gender}`;
}

function fetchPatientData(): Promise<Patient[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true;
      isSuccess ? resolve(patients) : reject("Lỗi không lấy được dữ liệu");
    }, 1000);
  });
}

async function displayPatients(): Promise<void> {
  try {
    const patients = await fetchPatientData();
    console.log(patients);
  } catch (error) {
    console.error(error);
  }
}

// ===================== DEMO / EXECUTION =====================
console.log("------------------- ADD Patient ---------------");
const newPatient: Patient = {
  id: "4",
  name: "Lê Văn C",
  age: 30,
  gender: "other",
};
console.log(addNewPatient(patients, newPatient));

console.log("------------------- UPDATE Patient ---------------");
console.log(updatePatient(patients, "3", { gender: "other" }));

console.log("------------------- DELETE Patient ---------------");
console.log(deletePatient(patients, "3"));

console.log("------------------- SEARCH Patient ---------------");
const foundPatient = searchPatient(patients, "2");
if (foundPatient) {
  console.log(getPatientInfo(foundPatient));
}

console.log("---------- Map demo ----------");
const patientMap = new Map<string, Patient>(patients.map((p) => [p.id, p]));
console.log(patientMap.has("2"));
console.log(patientMap.get("3"));

console.log("---------- Async / Await ----------");
displayPatients();

import { Patient } from "./models/patient";
import { Role } from "./models/role";

const patients: Patient[] = [
  { id: "1", name: "Nguyễn Hưng Nam", age: 22, gender: "male" },
  { id: "2", name: "Bùi Thị Hà", age: 22, gender: "female" },
  { id: "3", name: "Bui Van Lam", age: 24, gender: "male" },
];

console.log("------------------- ADD Patient ---------------");

function addNewPatient(patients: Patient[], newPatient: Patient): Patient[] {
  return [...patients, newPatient];
}
const newPatient: Patient = {
  id: "4",
  name: "Lê Văn C",
  age: 30,
  gender: "other",
};

const resultAddPatient = addNewPatient(patients, newPatient);
console.log(resultAddPatient);

console.log("------------------- Update Patient ---------------");
const updatePatient = (
  patients: Patient[],
  id: string,
  UpdateInfo: Partial<Patient>
): Patient[] => {
  return patients.map((patient) =>
    patient.id === id ? { ...patient, ...UpdateInfo } : patient
  );
};

const resultUpdatePatient = updatePatient(patients, "3", { gender: "other" });
console.log(resultUpdatePatient);

console.log("------------------- DELETE Patient ---------------");
const deletePatient = (patients: Patient[], id: string): Patient[] => {
  return patients.filter((patient) => patient.id !== id);
};

console.log(deletePatient(patients, "3"));

console.log("------------------- Search Patient ---------------");
const searchPatient = (
  patients: Patient[],
  keyword: string
): Patient | undefined => {
  return patients.find(
    (patient) => patient.name === keyword || patient.id === keyword
  );
};

console.log(searchPatient(patients, "2"));

console.log(
  "---------- Sử dụng Map để lưu patients theo id làm key cho truy cập nhanh ----------"
);

const patientMap: Map<string, Patient> = new Map(
  patients.map((patient) => [patient.id, patient])
);
const isPatient: boolean = patientMap.has("2");
const patient: Patient | undefined = patientMap.get("3");
console.log(isPatient);
console.log(patient);

console.log("----------JavaScript - Async/Await và Promise ----------");

const fetchPatientData = (): Promise<Patient[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSucess = true;
      if (isSucess) {
        resolve(patients);
      } else {
        reject("Lỗi không lấy được dữ liệu");
      }
    }, 1000);
  });
};

const displayPatients = async (): Promise<void> => {
  try {
    const patients = await fetchPatientData();
    console.log(patients);
  } catch (err) {
    console.log(err);
  }
};
displayPatients();

const getPatientInfo = (patient: Patient): string => {
  return `${patient.name} - ${patient.age} tuổi - Giới tính: ${patient.gender}`;
};

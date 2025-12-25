import { Patient } from "./models/patient";
import { Role } from "./models/role";
import { Doctor } from "./models/doctor";
import { MedicalRecord } from "./models/MedicalRecord";
import { patients } from "./data/patients";
import { Log } from "./decorator/log.decorator";
import {
  addItem,
  updateItemById,
  deleteItemById,
  searchItem,
} from "./utils/collectionHelpers";
import { calculateBMI } from "./Integration with JS/legacy";
import { handleCreateRecord } from "./feature/medical-record/handleCreateRecord";
import { creatPatient } from "./feature/patient/creatPatient";
import { Status } from "./models/status";

// type guard
function isPatient(obj: any): obj is Patient {
  return typeof obj.age === "number" && typeof obj.name === "string";
}

export class PatientService {
  @Log
  addPatient(patients: Patient[], newPatient: Patient): Patient[] {
    return addItem(patients, newPatient);
  }
}

// sử dụng Pick<MedicalRecord, 'id' | 'date'> cho views ngắn gọn.
function getMedicalRecordSummary(
  record: Pick<MedicalRecord, "id" | "date">
): void {
  console.log("Record:", record.id, record.date);
}

// type guards cơ bản
// function checkAge(patient: Patient): boolean {
function checkAge(patient: Patient): patient is Patient {
  return patient.age > 0;
}

function getPatientInfo(patient: Patient): string {
  return `${patient.name} - ${patient.age} tuổi - Giới tính: ${patient.gender}`;
}

function fetchPatientData(): Promise<Patient[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = false;
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

console.log("---------- TEST ---------------");

const data: any = { name: "ALo", age: 1 };
if (isPatient(data)) {
  console.log("Patient hợp lệ:", data);
} else {
  console.log("Patient không hợp lệ");
}

console.log("---------- Test integration with JS ---------");
console.log(calculateBMI(72, 1.75));

console.log(
  "----------Test Validate input cho MedicalRecord, Patient với guards ---------"
);

handleCreateRecord({
  id: "200",
  patientId: "P002",
  date: "2003-01-10",
  diagnosis: "Flu",
});

creatPatient({
  id: "25",
  name: "Quang",
  age: 22,
  gender: "male",
  role: Role.Patient,
  status: Status.Active,
});

/*
// ===================== DEMO / EXECUTION =====================
console.log("------------------- ADD Patient ---------------");
const newPatient: Patient = {
  id: "4",
  name: "Lê Văn C",
  age: 30,
  gender: "other",
  role: Role.Patient,
};
console.log(addItem<Patient>(patients, newPatient));

console.log("------------------- UPDATE Patient ---------------");
console.log(updateItemById<Patient>(patients, "3", { gender: "other" }));

console.log("------------------- DELETE Patient ---------------");
console.log(deleteItemById<Patient>(patients, "3"));

console.log("------------------- SEARCH Patient ---------------");
const foundPatient = searchItem<Patient>(patients, "2");
if (foundPatient) {
  console.log(getPatientInfo(foundPatient));
}

console.log("---------- Map demo ----------");
const patientMap = new Map<string, Patient>(patients.map((p) => [p.id, p]));
console.log(patientMap.has("2"));
console.log(patientMap.get("3"));

console.log("---------- Async / Await ----------");
// displayPatients();

console.log("---------- Test checkAge sử dụng type guards cơ bản ----------");

const testPatient: Patient = {
  id: "5",
  name: "Ngo QUang Hieu",
  age: 26,
  gender: "male",
  role: Role.Patient,
};

console.log(checkAge(testPatient));

const service = new PatientService();
service.addPatient(patients, {
  id: "4",
  name: "Nguyễn Văn A",
  age: 30,
  gender: "male",
  role: Role.Patient,
});

console.log(
  "----------sử dụng Pick<MedicalRecord, 'id' | 'date'> -------------"
);
const testMedicalRecord: MedicalRecord = {
  id: "181",
  patientId: "P001",
  date: new Date("2024-01-01"),
  diagnosis: "Common cold",
};
getMedicalRecordSummary(testMedicalRecord);*/

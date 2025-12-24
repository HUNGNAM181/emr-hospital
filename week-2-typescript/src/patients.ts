import { Patient } from "./models/patient";
import { Role } from "./models/role";
// ===================== DATA =====================
export const patients: Patient[] = [
  {
    id: "1",
    name: "Nguyễn Hưng Nam",
    age: 22,
    gender: "male",
    role: Role.Patient,
  },
  {
    id: "2",
    name: "Bùi Thị Hà",
    age: 22,
    gender: "female",
    role: Role.Patient,
  },
  { id: "3", name: "Bui Van Lam", age: 24, gender: "male", role: Role.Patient },
];

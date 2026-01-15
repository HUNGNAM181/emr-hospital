import { Patient } from "../models/patient";
import { Role } from "../models/role";
import { Status } from "../models/status";

export const patients: Patient[] = [
  {
    id: "1",
    name: "Nguyễn Hưng Nam",
    age: 22,
    gender: "male",
    role: Role.Patient,
    status: Status.Active,
    records: [],
  },

  {
    id: "2",
    name: "Bùi Thị Hà",
    age: 22,
    gender: "female",
    role: Role.Patient,
    status: Status.Active,
    records: [],
  },

  {
    id: "3",
    name: "Bùi Văn Lâm",
    age: 24,
    gender: "male",
    role: Role.Patient,
    status: Status.Active,
    records: [],
  },
];

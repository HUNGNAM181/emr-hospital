import { Patient } from "@/types/patient";
import { Role } from "@/types/role";
import { Status } from "@/types/status";

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

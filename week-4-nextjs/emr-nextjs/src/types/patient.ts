import { Role } from "./role";
import { Status } from "./status";
import { IIdentifiable } from "./IIdentifiable";
import { MedicalRecord } from "./MedicalRecord";
export interface Patient extends IIdentifiable {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  role: Role.Patient;
  status: Status;
  records: MedicalRecord[];
}

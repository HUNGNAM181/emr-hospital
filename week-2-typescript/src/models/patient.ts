import { Role } from "./role";
import { Status } from "./status";
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  role: Role.Patient;
  status: Status;
}

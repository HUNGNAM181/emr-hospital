import { Role } from "./role";
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  role: Role.Patient;
}

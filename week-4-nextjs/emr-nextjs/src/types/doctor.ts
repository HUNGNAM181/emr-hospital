import { Role } from "./role";
import { IIdentifiable } from "./IIdentifiable";

export interface Doctor extends IIdentifiable {
  name: string;
  specialty: string;
  role: Role.Doctor;
}

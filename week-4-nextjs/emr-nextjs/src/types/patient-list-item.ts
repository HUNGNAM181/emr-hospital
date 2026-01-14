import { IIdentifiable } from "./IIdentifiable";

export interface PatientListItem extends IIdentifiable {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  phone: string;
  address: string;
}

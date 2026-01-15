import { IIdentifiable } from "./IIdentifiable";

export interface Prescription extends IIdentifiable {
  medicalRecordId: string;
  medicine: string;
  dosage: string;
}

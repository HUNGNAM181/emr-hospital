import { IIdentifiable } from "./IIdentifiable";
import { Prescription } from "./Prescription";
export interface MedicalRecord extends IIdentifiable {
  patientId: string;
  date: Date;
  diagnosis: string;
  doctorId: string;
  prescriptions: Prescription[];
}

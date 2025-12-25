import { MedicalRecord } from "../../models/MedicalRecord";
import { isValidDateObject } from "./dateValidator";

export function isMedicalRecord(obj: any): obj is MedicalRecord {
  return (
    obj &&
    typeof obj.id === "string" &&
    typeof obj.patientId === "string" &&
    isValidDateObject(obj.date) &&
    typeof obj.diagnosis === "string"
  );
}

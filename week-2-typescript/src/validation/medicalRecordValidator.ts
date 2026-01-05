import { MedicalRecord } from "../models/MedicalRecord";

export function validateMedicalRecord(obj: any): obj is MedicalRecord {
  if (!obj || typeof obj !== "object")
    throw new Error("MedicalRecord must be an object");

  if (typeof obj.id !== "string") throw new Error("record.id must be a string");

  if (typeof obj.patientId !== "string")
    throw new Error("record.patientId must be a string");

  if (typeof obj.doctorId !== "string")
    throw new Error("record.doctorId must be a string");

  if (typeof obj.diagnosis !== "string")
    throw new Error("record.diagnosis must be a string");

  if (!(obj.date instanceof Date))
    throw new Error("record.date must be a Date object");

  if (!Array.isArray(obj.prescriptions))
    throw new Error("record.prescriptions must be an array");

  obj.prescriptions.forEach((p: any, i: number) => {
    if (
      !p ||
      typeof p.id !== "string" ||
      typeof p.medicalRecordId !== "string" ||
      typeof p.medicine !== "string" ||
      typeof p.dosage !== "string"
    ) {
      throw new Error(
        `record.prescriptions[${i}] must be a valid Prescription`
      );
    }
  });

  return true;
}

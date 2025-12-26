import { Patient } from "../../models/patient";
import { Status } from "../../models/status";
import { Role } from "../../models/role";
import { MedicalRecord } from "../../models/MedicalRecord";
import { validateMedicalRecord } from "../medical-record/medicalRecordValidator";

export function validatePatient(obj: any): obj is Patient {
  if (!obj || typeof obj !== "object")
    throw new Error("Patient must be an object");

  if (typeof obj.id !== "string")
    throw new Error("patient.id must be a string");

  if (typeof obj.name !== "string")
    throw new Error("patient.name must be a string");

  if (typeof obj.age !== "number")
    throw new Error("patient.age must be a number");

  if (!["male", "female", "other"].includes(obj.gender))
    throw new Error("patient.gender invalid");

  if (obj.role !== Role.Patient)
    throw new Error("patient.role must be Role.Patient");

  if (!Object.values(Status).includes(obj.status))
    throw new Error("patient.status invalid");

  // ⬇️ NEW — validate optional records
  if (obj.records !== undefined) {
    if (!Array.isArray(obj.records))
      throw new Error("patient.records must be an array");

    // kiểm tra từng MedicalRecord
    obj.records.forEach((rec: any, i: number) => {
      try {
        validateMedicalRecord(rec);
      } catch (e) {
        throw new Error(
          `patient.records[${i}] invalid: ${(e as Error).message}`
        );
      }
    });
  }

  return true;
}

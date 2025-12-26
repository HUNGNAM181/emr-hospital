import { Prescription } from "../../models/Prescription";
export function validatePrescription(pres: any): pres is Prescription {
  if (!pres || typeof pres !== "object") {
    throw new Error("Prescription must be an object");
  }

  if (typeof pres.id !== "string")
    throw new Error("Prescription.id must be a string");

  if (typeof pres.medicalRecordId !== "string")
    throw new Error("medicalRecordId must be a string");

  if (typeof pres.medicine !== "string")
    throw new Error("medicine must be a string");

  if (typeof pres.dosage !== "string")
    throw new Error("dosage must be a string");

  return true;
}

import { isMedicalRecord } from "./medicalRecordValidator";
import { normalizeRecordInput } from "./normalizeRecordInput";

export function handleCreateRecord(input: any) {
  const normalized = normalizeRecordInput(input);
  if (!isMedicalRecord(normalized)) {
    throw new Error("Invalid MedicalRecord input");
  }
  console.log("Record hợp lệ:", normalized.id);
}

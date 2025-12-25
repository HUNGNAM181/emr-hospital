import { isPatient } from "./patientValidator";
import { Status } from "../../models/status";

export function creatPatient(input: any) {
  if (!isPatient(input)) {
    throw new Error("Invalid Patient input");
  }
  console.log("Patient hợp lệ: ", input);
  return input;
}

import { Doctor } from "../../models/doctor";
import { Role } from "../../models/role";

export function validateDoctor(obj: any): obj is Doctor {
  if (!obj || typeof obj !== "object")
    throw new Error("Doctor must be an object");

  if (typeof obj.id !== "string") throw new Error("doctor.id must be a string");

  if (typeof obj.name !== "string")
    throw new Error("doctor.name must be a string");

  if (typeof obj.specialty !== "string")
    throw new Error("doctor.specialty must be a string");

  if (obj.role !== Role.Doctor)
    throw new Error("doctor.role must be Role.Doctor");

  return true;
}

import { Patient } from "../../models/patient";
import { Status } from "../../models/status";
import { Role } from "../../models/role";

export function isPatient(obj: any): obj is Patient {
  return (
    obj &&
    typeof obj.id === "string" &&
    typeof obj.name === "string" &&
    typeof obj.age === "number" &&
    (obj.gender === "male" ||
      obj.gender === "female" ||
      obj.gender === "other") &&
    obj.role === Role.Patient &&
    Object.values(Status).includes(obj.status)
    // // 👉 ["active", "inactive"]
  );
}

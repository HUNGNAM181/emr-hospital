import { patients } from "./patients";

export function getPatientById(id: string) {
  return patients.find((p) => p.id === id);
}

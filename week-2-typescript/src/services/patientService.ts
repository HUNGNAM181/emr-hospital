import { IRepository } from "../repository/repository";
import { Patient } from "../models/patient";

export class PatientService {
  constructor(private repo: IRepository<Patient>) {}

  createPatient(patient: Patient) {
    const exists = this.repo.findById(patient.id);
    if (exists) throw new Error("Patient đã tồn tại.");

    this.repo.add(patient);
  }

  getPatient(id: string) {
    return this.repo.findById(id);
  }

  getAllPatients() {
    return this.repo.getAll();
  }

  updatePatient(id: string, data: Partial<Patient>) {
    this.repo.update(id, data);
  }

  deletePatient(id: string) {
    this.repo.deleteById(id);
  }
}

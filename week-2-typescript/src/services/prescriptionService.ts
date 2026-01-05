import { IRepository } from "../repository/repository";
import { Prescription } from "../models/Prescription";
import { validatePrescription } from "../validation/prescriptionValidator";
import { MedicalRecord } from "../models/MedicalRecord";

export class PrescriptionService {
  constructor(
    private prescriptionRepo: IRepository<Prescription>,
    private medicalRecordRepo: IRepository<MedicalRecord>
  ) {}

  create(input: any): Prescription {
    validatePrescription(input);
    const exists = this.prescriptionRepo.findById(input.id);
    if (exists) {
      throw new Error(`Prescription '${input.id}' already exists`);
    }
    const record = this.medicalRecordRepo.findById(input.medicalRecordId);
    if (!record) {
      throw new Error(
        `MedicalRecord '${input.medicalRecordId}' does not exist`
      );
    }
    this.prescriptionRepo.add(input);
    return input;
  }

  getById(id: string) {
    return this.prescriptionRepo.findById(id);
  }

  getAll() {
    return this.prescriptionRepo.getAll();
  }

  update(id: string, data: Partial<Prescription>) {
    this.prescriptionRepo.update(id, data);
  }

  delete(id: string) {
    this.prescriptionRepo.deleteById(id);
  }
}

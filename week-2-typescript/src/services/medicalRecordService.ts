import { IRepository } from "../repository/repository";
import { MedicalRecord } from "../models/MedicalRecord";
import { validateMedicalRecord } from "../feature/medical-record/medicalRecordValidator";
import { Patient } from "../models/patient";
import { Doctor } from "../models/doctor";

export class MedicalRecordService {
  constructor(
    private recordRepo: IRepository<MedicalRecord>,
    private patientRepo: IRepository<Patient>,
    private doctorRepo: IRepository<Doctor>
  ) {}

  create(input: any): MedicalRecord {
    validateMedicalRecord(input);

    const exists = this.recordRepo.findById(input.id);
    if (exists) {
      throw new Error(`MedicalRecord '${input.id}' already exists`);
    }

    const patient = this.patientRepo.findById(input.patientId);
    if (!patient) {
      throw new Error(`Patient '${input.patientId}' does not exist`);
    }

    const doctor = this.doctorRepo.findById(input.doctorId);
    if (!doctor) {
      throw new Error(`Doctor '${input.doctorId}' does not exist`);
    }

    this.recordRepo.add(input);

    return input;
  }

  getById(id: string) {
    return this.recordRepo.findById(id);
  }

  getAll() {
    return this.recordRepo.getAll();
  }

  update(id: string, data: Partial<MedicalRecord>) {
    this.recordRepo.update(id, data);
  }

  delete(id: string) {
    this.recordRepo.deleteById(id);
  }
}

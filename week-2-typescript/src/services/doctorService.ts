import { IRepository } from "../repository/repository";
import { Doctor } from "../models/doctor";
import { validateDoctor } from "../validation/doctorValidator";

export class DoctorService {
  constructor(private repo: IRepository<Doctor>) {}

  create(input: any): Doctor {
    validateDoctor(input);
    const exists = this.repo.findById(input.id);
    if (exists) {
      throw new Error(`Doctor '${input.id}' already exists`);
    }

    this.repo.add(input);

    return input;
  }

  getById(id: string) {
    return this.repo.findById(id);
  }

  getAll() {
    return this.repo.getAll();
  }

  update(id: string, data: Partial<Doctor>) {
    this.repo.update(id, data);
  }

  delete(id: string) {
    this.repo.deleteById(id);
  }
}

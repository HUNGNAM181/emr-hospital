import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './patient.interface';

@Injectable()
export class PatientsService {
  private patients: Patient[] = [];
  private idCounter = 1;

  create(dto: CreatePatientDto): Patient {
    const patient: Patient = {
      id: this.idCounter++,
      ...dto,
    };

    this.patients.push(patient);
    return patient;
  }

  findAll(): Patient[] {
    return this.patients;
  }

  update(id: number, dto: UpdatePatientDto): Patient {
    const patient = this.patients.find((p) => p.id === id);

    if (!patient) {
      throw new NotFoundException(`Patient with id ${id} not found`);
    }

    Object.assign(patient, dto);
    return patient;
  }
}

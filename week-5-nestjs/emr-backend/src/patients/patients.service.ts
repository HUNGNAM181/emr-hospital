import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { PatientNotFoundException } from './exceptions/patient-not-found.exception';

@Injectable()
export class PatientsService {
  private patients: Patient[] = [];

  create(dto: CreatePatientDto): Patient {
    const patient: Patient = {
      id: uuidv4(),
      ...dto,
    };

    this.patients.push(patient);
    return patient;
  }

  findAll(): Patient[] {
    return this.patients;
  }

  findOne(id: string): Patient {
    const patient = this.patients.find((p) => p.id === id);
    if (!patient) {
      throw new PatientNotFoundException(id);
    }
    return patient;
  }

  update(id: string, dto: UpdatePatientDto): Patient {
    const patient = this.findOne(id);
    Object.assign(patient, dto);
    return patient;
  }
}

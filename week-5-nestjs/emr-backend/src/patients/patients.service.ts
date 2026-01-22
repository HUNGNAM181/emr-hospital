import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient, PatientDocument } from './schemas/patients.schema';
import { PatientNotFoundException } from './exceptions/patient-not-found.exception';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name)
    private readonly patientModel: Model<PatientDocument>,
  ) {}

  async create(dto: CreatePatientDto, doctorId: string): Promise<Patient> {
    return await this.patientModel.create({
      ...dto,
      doctorId,
    });
  }

  async findAll(): Promise<Patient[]> {
    return await this.patientModel.find().exec();
  }

  async findOne(id: string): Promise<Patient> {
    const patient = await this.patientModel.findById(id).exec();

    if (!patient) {
      throw new PatientNotFoundException(id);
    }

    return patient;
  }

  async update(id: string, dto: UpdatePatientDto): Promise<Patient> {
    const patient = await this.patientModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();

    if (!patient) {
      throw new PatientNotFoundException(id);
    }

    return patient;
  }

  async remove(id: string) {
    const patient = await this.patientModel.findByIdAndDelete(id).exec();

    if (!patient) {
      throw new PatientNotFoundException(id);
    }

    return { message: 'Patient deleted successfully' };
  }
}

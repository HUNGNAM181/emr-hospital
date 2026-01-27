import {
  Injectable,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Patient, PatientDocument } from './schemas/patients.schema';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientNotFoundException } from './exceptions/patient-not-found.exception';
import { Role } from '../auth/roles.enum';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name)
    private readonly patientModel: Model<PatientDocument>,
  ) {}

  // ================= CREATE =================
  async create(
    dto: CreatePatientDto,
    user: { userId: string; role: Role },
  ): Promise<Patient> {
    // ===== DOCTOR =====
    if (user.role === Role.DOCTOR) {
      //  Doctor KHÔNG được gán doctorId
      if (dto.doctorId) {
        throw new ForbiddenException('Only admin can assign doctorId');
      }

      return this.patientModel.create({
        ...dto,
        doctorId: user.userId, // doctor chỉ tạo cho chính mình
      });
    }

    // ===== ADMIN =====
    if (user.role === Role.ADMIN) {
      //  Admin bắt buộc phải gán doctorId
      if (!dto.doctorId) {
        throw new BadRequestException('Admin must assign doctorId');
      }

      return this.patientModel.create({
        ...dto,
        doctorId: dto.doctorId, // admin gán doctor phụ trách
      });
    }

    throw new ForbiddenException();
  }

  // ================= FIND ALL =================
  async findAll(user: { userId: string; role: Role }): Promise<Patient[]> {
    // ADMIN + NURSE → xem tất cả
    if (user.role === Role.ADMIN || user.role === Role.NURSE) {
      return this.patientModel.find().exec();
    }

    // DOCTOR → chỉ xem của mình
    if (user.role === Role.DOCTOR) {
      return this.patientModel.find({ doctorId: user.userId }).exec();
    }

    return [];
  }

  // ================= FIND ONE =================
  async findOne(
    id: string,
    user: { userId: string; role: Role },
  ): Promise<Patient> {
    const patient = await this.patientModel.findById(id).exec();

    if (!patient) {
      throw new PatientNotFoundException(id);
    }

    // ADMIN + NURSE → xem được tất cả
    if (user.role === Role.ADMIN || user.role === Role.NURSE) {
      return patient;
    }

    // DOCTOR → chỉ owner
    if (
      user.role === Role.DOCTOR &&
      patient.doctorId.toString() === user.userId
    ) {
      return patient;
    }

    throw new ForbiddenException();
  }

  // ================= UPDATE =================
  async update(
    id: string,
    dto: UpdatePatientDto,
    user: { userId: string; role: Role },
  ): Promise<Patient> {
    // check quyền trước
    await this.findOne(id, user);

    // doctor không được đổi doctorId
    if (user.role === Role.DOCTOR) {
      delete (dto as any).doctorId;
    }

    const patient = await this.patientModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();

    if (!patient) {
      throw new PatientNotFoundException(id);
    }

    return patient;
  }

  // ================= DELETE =================
  async remove(id: string, user: { userId: string; role: Role }) {
    // check quyền trước
    await this.findOne(id, user);

    const patient = await this.patientModel.findByIdAndDelete(id).exec();

    if (!patient) {
      throw new PatientNotFoundException(id);
    }

    return { message: 'Patient deleted successfully' };
  }
}

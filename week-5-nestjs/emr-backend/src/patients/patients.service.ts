import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {
  create(dto: CreatePatientDto) {
    return {
      id: 1,
      ...dto,
    };
  }

  update(id: string, dto: UpdatePatientDto) {
    return {
      id,
      ...dto,
    };
  }
}

import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  async create(@Body() dto: CreatePatientDto) {
    const fakeDoctorId = '65a123456789abcdef123456'; // ObjectId hợp lệ
    return await this.patientsService.create(dto, fakeDoctorId);
  }

  @Get()
  async findAll() {
    return await this.patientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.patientsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdatePatientDto) {
    return await this.patientsService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.patientsService.remove(id);
  }
}

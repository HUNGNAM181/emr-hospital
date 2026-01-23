import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';

@Controller('patients')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  // ADMIN: tạo patient
  @Post()
  @Roles(Role.ADMIN)
  async create(@Body() dto: CreatePatientDto, @Req() req: Request) {
    const doctorId = (req.user as any).userId;
    return await this.patientsService.create(dto, doctorId);
  }

  // ADMIN + DOCTOR + NURSE: xem danh sách
  @Get()
  @Roles(Role.ADMIN, Role.DOCTOR, Role.NURSE)
  async findAll() {
    return await this.patientsService.findAll();
  }

  // ADMIN + DOCTOR + NURSE: xem chi tiết
  @Get(':id')
  @Roles(Role.ADMIN, Role.DOCTOR, Role.NURSE)
  async findOne(@Param('id') id: string) {
    return await this.patientsService.findOne(id);
  }

  // ADMIN: cập nhật
  @Put(':id')
  @Roles(Role.ADMIN)
  async update(@Param('id') id: string, @Body() dto: UpdatePatientDto) {
    return await this.patientsService.update(id, dto);
  }

  // ADMIN: xóa
  @Delete(':id')
  @Roles(Role.ADMIN)
  async remove(@Param('id') id: string) {
    return await this.patientsService.remove(id);
  }
}

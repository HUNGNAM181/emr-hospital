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

  // ================= CREATE =================
  // ADMIN + DOCTOR
  @Post()
  @Roles(Role.ADMIN, Role.DOCTOR)
  create(@Body() dto: CreatePatientDto, @Req() req: Request) {
    return this.patientsService.create(dto, req.user as any);
  }

  // ================= FIND ALL =================
  // ADMIN + DOCTOR + NURSE
  @Get()
  @Roles(Role.ADMIN, Role.DOCTOR, Role.NURSE)
  findAll(@Req() req: Request) {
    return this.patientsService.findAll(req.user as any);
  }

  // ================= FIND ONE =================
  // ADMIN + DOCTOR + NURSE
  @Get(':id')
  @Roles(Role.ADMIN, Role.DOCTOR, Role.NURSE)
  findOne(@Param('id') id: string, @Req() req: Request) {
    return this.patientsService.findOne(id, req.user as any);
  }

  // ================= UPDATE =================
  // ADMIN + DOCTOR
  @Put(':id')
  @Roles(Role.ADMIN, Role.DOCTOR)
  update(
    @Param('id') id: string,
    @Body() dto: UpdatePatientDto,
    @Req() req: Request,
  ) {
    return this.patientsService.update(id, dto, req.user as any);
  }

  // ================= DELETE =================
  // ADMIN + DOCTOR
  @Delete(':id')
  @Roles(Role.ADMIN, Role.DOCTOR)
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.patientsService.remove(id, req.user as any);
  }
}

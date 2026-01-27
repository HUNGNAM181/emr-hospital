import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { Role } from '../auth/roles.enum';
import { User } from '../users/schemas/user.schema';
import { Patient } from '../patients/schemas/patients.schema';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const userModel = app.get<Model<User>>(getModelToken(User.name));
  const patientModel = app.get<Model<Patient>>(getModelToken(Patient.name));

  // ================= CLEAR OLD DATA =================
  await patientModel.deleteMany({});
  await userModel.deleteMany({});

  console.log('🧹 Old data cleared');

  // ================= PASSWORD =================
  const hashedPassword = await bcrypt.hash('123456', 10);

  // ================= USERS =================
  const admin = await userModel.create({
    email: 'admin@emr.com',
    password: hashedPassword,
    role: Role.ADMIN,
  });

  const doctor1 = await userModel.create({
    email: 'doctor1@emr.com',
    password: hashedPassword,
    role: Role.DOCTOR,
  });

  const doctor2 = await userModel.create({
    email: 'doctor2@emr.com',
    password: hashedPassword,
    role: Role.DOCTOR,
  });

  console.log('Users created');

  // ================= PATIENTS =================
  await patientModel.create([
    {
      name: 'Patient A',
      age: 30,
      gender: 'male',
      phone: '0911111111',
      doctorId: doctor1._id,
    },
    {
      name: 'Patient B',
      age: 45,
      gender: 'female',
      phone: '0922222222',
      doctorId: doctor1._id,
    },
    {
      name: 'Patient C',
      age: 50,
      gender: 'male',
      phone: '0933333333',
      doctorId: doctor2._id,
    },
    {
      name: 'Patient D',
      age: 38,
      gender: 'female',
      phone: '0944444444',
      doctorId: doctor2._id,
    },
  ]);

  console.log('Patients created');

  console.log('Seed data done');
  console.log('Password for all users: 123456');

  await app.close();
}

bootstrap();

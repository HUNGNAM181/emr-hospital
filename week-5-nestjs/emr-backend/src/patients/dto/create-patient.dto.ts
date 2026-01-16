import { IsString, IsInt, IsOptional, IsPhoneNumber } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  gender: string;

  @IsPhoneNumber('VN')
  phone: string;

  @IsOptional()
  @IsString()
  address?: string;
}

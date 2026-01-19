import { IsString, IsInt, IsOptional, IsIn, Matches } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsIn(['male', 'female'])
  gender: 'male' | 'female';

  @Matches(/^[0-9]{9,11}$/)
  phone: string;

  @IsOptional()
  @IsString()
  address?: string;
}

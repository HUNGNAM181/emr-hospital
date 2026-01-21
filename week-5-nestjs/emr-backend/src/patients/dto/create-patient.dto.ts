import {
  IsString,
  IsInt,
  IsOptional,
  IsIn,
  Matches,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePatientDto {
  @IsString({ message: 'Tên bệnh nhân phải là chuỗi' })
  @IsNotEmpty({ message: 'Tên bệnh nhân không được để trống' })
  name: string;

  @Type(() => Number)
  @IsInt({ message: 'Tuổi phải là số nguyên' })
  age: number;

  @IsIn(['male', 'female'], {
    message: 'Giới tính chỉ được là male hoặc female',
  })
  gender: 'male' | 'female';

  @IsString({ message: 'Số điện thoại phải là chuỗi' })
  @Matches(/^[0-9]{9,11}$/, {
    message: 'Số điện thoại phải có 9–11 chữ số',
  })
  phone: string;

  @IsOptional()
  @IsString({ message: 'Địa chỉ phải là chuỗi' })
  address?: string;
}

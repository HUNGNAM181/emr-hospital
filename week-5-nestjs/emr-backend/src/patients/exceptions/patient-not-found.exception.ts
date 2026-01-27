import { NotFoundException } from '@nestjs/common';

export class PatientNotFoundException extends NotFoundException {
  constructor(id: string) {
    super(`Không tìm thấy bệnh nhân với id: ${id}`);
  }
}

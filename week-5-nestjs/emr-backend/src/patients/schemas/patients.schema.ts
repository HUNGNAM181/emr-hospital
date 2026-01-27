import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PatientDocument = Patient & Document;

@Schema({ timestamps: true })
export class Patient {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  gender: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  doctorId: Types.ObjectId;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);

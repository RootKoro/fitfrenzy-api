import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SportDocument = Sport & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Sport {
  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  rate: number;

  @Prop({ required: true })
  difficulty: string;

  @Prop({ required: false })
  other_information: string

}

export const SportSchema = SchemaFactory.createForClass(Sport);
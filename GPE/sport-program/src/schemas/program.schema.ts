import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProgramDocument = Program & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Program {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  program: string;
}

export const ProgramSchema = SchemaFactory.createForClass(Program);
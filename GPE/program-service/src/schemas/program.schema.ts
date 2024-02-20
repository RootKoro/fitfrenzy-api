import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ExerciceDocument } from './exercice.schema';

export type ProgramDocument = Program & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Program {
  @Prop({ required: true })
  difficulty: string;

  @Prop({ required: true })
  exercices: ExerciceDocument[];

  @Prop({ required: true })
  schedule: string[];

  @Prop({ required: false })
  done: boolean = false;
}

export const ProgramSchema = SchemaFactory.createForClass(Program);
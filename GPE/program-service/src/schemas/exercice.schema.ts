import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExerciceDocument = Exercice & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Exercice {
  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  sports: string[];

  @Prop({ required: true })
  level: number[];

  @Prop({ required: true })
  media_path: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  chrono: boolean;

  @Prop({ required: false})
  time_in_sec: number;

  @Prop({ required: false})
  reps: number;

  @Prop({ required: false})
  rest: number;

  @Prop({ required: false})
  series: number;
}

export const ExerciceSchema = SchemaFactory.createForClass(Exercice);

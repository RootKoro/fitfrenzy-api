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
  sports: string;

  @Prop({ required: true })
  level: string;

  @Prop({ required: true })
  image_path: string;

  @Prop({ required: true })
  description: string;
}

export const ExerciceSchema = SchemaFactory.createForClass(Exercice);

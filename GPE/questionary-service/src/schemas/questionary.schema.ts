import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionaryDocument = Questionary & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Questionary {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  questions: string;
}

export const QuestionarySchema = SchemaFactory.createForClass(Questionary);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Question {
  @Prop({ required: true })
  questionary_type: string;

  @Prop({ required: true })
  question: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
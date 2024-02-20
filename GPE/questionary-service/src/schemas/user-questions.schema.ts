import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserQuestionsDocument = UserQuestions & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class UserQuestions {
  @Prop({ required: true })
  id_user: string;

  @Prop({ required: true })
  id_question: string;

  @Prop({ required: true })
  response: string[];
}

export const UserQuestionsSchema = SchemaFactory.createForClass(UserQuestions);
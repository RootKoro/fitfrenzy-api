import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
}

export class Option {
  @Prop({ required: true })
  text: string;

  @Prop({ required: false })
  icon: string;
}

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Question {
  @Prop({ 
    required: true,
    enum: Object.values(QuestionType), 
    default: QuestionType.SINGLE_CHOICE
  })
  type: string;

  @Prop({ required: true })
  question: string;

  @Prop({
    type:[{text:{type:String}, icon:{type:String}}]
  })
  options: { quantity: string; product: string }[];

}

export const QuestionSchema = SchemaFactory.createForClass(Question);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResponseDocument = Response & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Response {
  @Prop({ required: true })
  question_id: string;

  @Prop({ required: true })
  response: string;
}

export const ResponseSchema = SchemaFactory.createForClass(Response);
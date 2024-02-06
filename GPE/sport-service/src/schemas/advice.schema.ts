import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdviceDocument = Advice & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Advice {
  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  advice: string;
}

export const AdviceSchema = SchemaFactory.createForClass(Advice);

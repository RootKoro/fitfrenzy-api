import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';

export type CustomerDocument = Customer & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Customer extends User {
  @Prop({ required: true })
  gender: string;

  @Prop({ type: 'date' })
  birthday: string;

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  weight: number;

  @Prop({ required: true})
  ilness: String[];

  @Prop({ required: true })
  exp: number;

  @Prop({ required: true })
  level: string;

  @Prop({ required: true})
  Preferences: String[];

}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
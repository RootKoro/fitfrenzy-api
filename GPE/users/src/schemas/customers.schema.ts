import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';

export type CustomerDocument = Customer & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Customer extends User {
  @Prop({ required: true })
  gender: string;

  @Prop({ required: false })
  height: number;

  @Prop({ required: true })
  weight: number;

  @Prop({ required: true})
  illness: String[];

  @Prop({ required: true })
  exp: number;

  @Prop({ required: true })
  level: string;

  @Prop({ required: true})
  preferences: String[];

}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from './user.schema';

export type CustomerDocument = Customer & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Customer extends User {
  @Prop({ required: false })
  gender: String;

  @Prop({ required: false })
  height: number;

  @Prop({ required: false })
  weight: number;

  @Prop({ required: false })
  illness: String[];

  @Prop({ required: false })
  exp: number;

  @Prop({ required: false })
  level: String;

  @Prop({ required: false })
  preferences: String[];
}

const CustomerSchema = SchemaFactory.createForClass(Customer);
CustomerSchema.index({ email: 1 }, { unique: true });
export { CustomerSchema };

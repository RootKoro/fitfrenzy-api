import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, type: 'date' })
  birthday: Date;

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
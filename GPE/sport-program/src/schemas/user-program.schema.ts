import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserProgramDocument = UserProgram & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class UserProgram {
  @Prop({ required: true })
  id_user: string;

  @Prop({ required: true })
  id_program: string;
}

export const UserProgramSchema = SchemaFactory.createForClass(UserProgram);
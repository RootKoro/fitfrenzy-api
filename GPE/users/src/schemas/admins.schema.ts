import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Admin extends User {

}

export const AdminSchema = SchemaFactory.createForClass(Admin);
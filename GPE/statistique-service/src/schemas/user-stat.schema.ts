import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserStatDocument = UserStat & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class UserStat {
  @Prop({ required: true })
  id_user: string;

  @Prop({ required: true })
  habits: string;

  @Prop({ required: true })
  preferences: string;

  @Prop({ required: true })
  other_informations: string;

  @Prop({ required: true })
  average_weekly_conn: number;
}

export const UserStatSchema = SchemaFactory.createForClass(UserStat);
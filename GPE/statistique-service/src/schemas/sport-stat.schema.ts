import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SportStatDocument = SportStat & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class SportStat {
  @Prop({ required: true })
  id_sport: string;

  @Prop({ required: true })
  rank: number;

  @Prop({ required: true })
  liked_by: number;

  @Prop({ required: true })
  practiced_by: number;

  @Prop({ required: true })
  other_informations: string;
}

export const SportStatSchema = SchemaFactory.createForClass(SportStat);
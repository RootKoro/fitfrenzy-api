import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { Sport, SportDocument } from '../schemas/sport.schema';

@Injectable()
export class SportsService {
  constructor(
    @InjectModel(Sport.name) private readonly sportModel: Model<SportDocument>,
  ) {}

  async create(createSportDto: CreateSportDto): Promise<SportDocument> {
    const sport = new this.sportModel(createSportDto);
    return sport.save();
  }

  async findAll(): Promise<SportDocument[]> {
    return this.sportModel.find();
  }

  findOne(id: string) {
    return this.sportModel.findById(id);
  }

  async findByTypeNDifficulty(
    type: string,
    difficulty: string,
  ): Promise<SportDocument[]> {
    return await this.sportModel.find({
      type: type,
      difficulty: difficulty,
    });
  }

  async update(
    id: string,
    updateSportDto: UpdateSportDto,
  ): Promise<SportDocument> {
    return this.sportModel.findByIdAndUpdate(id, updateSportDto);
  }

  async remove(id: string) {
    return this.sportModel.findByIdAndRemove(id);
  }
}

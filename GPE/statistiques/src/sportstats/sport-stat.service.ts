
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSportStatDto } from './dto/create-sport-stat.dto';
import { UpdateSportStatDto } from './dto/update-sport-stat.dto';
import { SportStat, SportStatDocument } from '../schemas/sport-stat.schema';

@Injectable()
export class SportStatService {
  constructor(
    @InjectModel(SportStat.name) private readonly sportStatModel: Model<SportStatDocument>,
  ) {}

  async create(CreateSportStatDto: CreateSportStatDto): Promise<SportStatDocument> {
    const sportStat = new this.sportStatModel(CreateSportStatDto);
    return sportStat.save();
  }

  async findAll(): Promise<SportStatDocument[]> {
    return this.sportStatModel.find();
  }

  findOne(id: string) {
    return this.sportStatModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateSportStatDto): Promise<SportStatDocument> {
    return this.sportStatModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string) {
    return this.sportStatModel.findByIdAndRemove(id);
  }
}
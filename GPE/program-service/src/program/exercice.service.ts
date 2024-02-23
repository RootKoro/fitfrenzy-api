import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExerciceDto } from './dto/create-exercice.dto';
import { UpdateExerciceDto } from './dto/update-exercice.dto';
import { Exercice, ExerciceDocument } from '../schemas/exercice.schema';

@Injectable()
export class ExerciceService {
  constructor(
    @InjectModel(Exercice.name)
    private readonly exerciceModel: Model<ExerciceDocument>,
  ) {}

  async create(
    createExerciceDto: CreateExerciceDto,
  ): Promise<ExerciceDocument> {
    const exercice = new this.exerciceModel(createExerciceDto);
    return await exercice.save();
  }

  async findAll(): Promise<ExerciceDocument[]> {
    return await this.exerciceModel.find();
  }

  async findBySport(sport: string): Promise<ExerciceDocument[]> {
    return await this.exerciceModel.find({ sports: { $elemMatch: {sport} } });
  }

  async findByName(name: string): Promise<ExerciceDocument[]> {
    return await this.exerciceModel.find({ name: name });
  }

  async findByType(type: string): Promise<ExerciceDocument[]> {
    return await this.exerciceModel.find({ type: type });
  }

  async findByTypeNSport(
    type: string,
    sport: string,
  ): Promise<ExerciceDocument[]> {
    return await this.exerciceModel.find({
      type: type,
      sports: { $elemMatch: {sport} },
    });
  }

  findOne(id: string) {
    return this.exerciceModel.findById(id);
  }

  async update(
    id: string,
    updateExerciceDto: UpdateExerciceDto,
  ): Promise<ExerciceDocument> {
    return this.exerciceModel.findByIdAndUpdate(id, updateExerciceDto);
  }

  async remove(id: string) {
    return this.exerciceModel.findByIdAndRemove(id);
  }
}


import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExerciceDto } from './dto/create-exercice.dto';
import { UpdateExerciceDto } from './dto/update-exercice.dto';
import { Exercice, ExerciceDocument,  } from '../schemas/exercice.schema';

@Injectable()
export class ExerciceService {
  constructor(
    @InjectModel(Exercice.name) private readonly exerciceModel: Model<ExerciceDocument>,
  ) {}

  async create(createExerciceDto: CreateExerciceDto): Promise<ExerciceDocument> {
    const exercice = new this.exerciceModel(createExerciceDto);
    return exercice.save();
  }

  async findAll(): Promise<ExerciceDocument[]> {
    return this.exerciceModel.find();
  }

  findOne(id: string) {
    return this.exerciceModel.findById(id);
  }

  async update(id: string, updateExerciceDto: UpdateExerciceDto): Promise<ExerciceDocument> {
    return this.exerciceModel.findByIdAndUpdate(id, updateExerciceDto);
  }

  async remove(id: string) {
    return this.exerciceModel.findByIdAndRemove(id);
  }
}

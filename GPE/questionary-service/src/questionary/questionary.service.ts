
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionaryDto } from './dto/create-questionary.dto';
import { UpdateQuestionaryDto } from './dto/update-questionary.dto';
import { Questionary, QuestionaryDocument,  } from '../schemas/questionary.schema';

@Injectable()
export class QuestionaryService {
  constructor(
    @InjectModel(Questionary.name) private readonly questionaryModel: Model<QuestionaryDocument>,
  ) {}

  async create(createQuestionaryDto: CreateQuestionaryDto): Promise<QuestionaryDocument> {
    const questionary = new this.questionaryModel(createQuestionaryDto);
    return questionary.save();
  }

  async findAll(): Promise<QuestionaryDocument[]> {
    return this.questionaryModel.find();
  }

  findOne(id: string) {
    return this.questionaryModel.findById(id);
  }

  async update(id: string, updateQuestionaryDto: UpdateQuestionaryDto): Promise<QuestionaryDocument> {
    return this.questionaryModel.findByIdAndUpdate(id, updateQuestionaryDto);
  }

  async remove(id: string) {
    return this.questionaryModel.findByIdAndRemove(id);
  }
}
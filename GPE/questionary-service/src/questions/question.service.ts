import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question, QuestionDocument,  } from '../schemas/question.schema';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private readonly questionModel: Model<QuestionDocument>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<QuestionDocument> {
    const question = new this.questionModel(createQuestionDto);
    return question.save();
  }

  async findAll(): Promise<QuestionDocument[]> {
    return this.questionModel.find();
  }

  findOne(id: string) {
    return this.questionModel.findById(id);
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto): Promise<QuestionDocument> {
    return this.questionModel.findByIdAndUpdate(id, updateQuestionDto);
  }

  async remove(id: string) {
    return this.questionModel.findByIdAndRemove(id);
  }
}
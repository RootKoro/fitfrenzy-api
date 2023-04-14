
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserQuestionsDto } from './dto/create-user-questions.dto';
import { UpdateUserQuestionsDto } from './dto/update-user-questions.dto';
import { UserQuestions, UserQuestionsDocument,  } from '../schemas/user-questions.schema';

@Injectable()
export class UserQuestionsService {
  constructor(
    @InjectModel(UserQuestions.name) private readonly userQuestionsModel: Model<UserQuestionsDocument>,
  ) {}

  async create(createUserQuestionsDto: CreateUserQuestionsDto): Promise<UserQuestionsDocument> {
    const sportStat = new this.userQuestionsModel(createUserQuestionsDto);
    return sportStat.save();
  }

  async findAll(): Promise<UserQuestionsDocument[]> {
    return this.userQuestionsModel.find();
  }

  findOne(id: string) {
    return this.userQuestionsModel.findById(id);
  }

  async update(id: string, updateUserQuestionsDto: UpdateUserQuestionsDto): Promise<UserQuestionsDocument> {
    return this.userQuestionsModel.findByIdAndUpdate(id, updateUserQuestionsDto);
  }

  async remove(id: string) {
    return this.userQuestionsModel.findByIdAndRemove(id);
  }
}
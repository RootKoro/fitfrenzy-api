
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

  async findByUID(id_user: string): Promise<UserQuestionsDocument[]> {
    return this.userQuestionsModel.find().where("id_user").equals(id_user);
  }

  async findByQID(id_question: string): Promise<UserQuestionsDocument[]> {
    return this.userQuestionsModel.find().where("id_question").equals(id_question);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserProgramDto } from './dto/create-user-program.dto';
import { UpdateUserProgramDto } from './dto/update-user-program.dto';
import { UserProgram, UserProgramDocument,  } from '../schemas/user-program.schema';

@Injectable()
export class UserProgramService {
  constructor(
    @InjectModel(UserProgram.name) private readonly userProgramModel: Model<UserProgramDocument>,
  ) {}

  async create(createUserProgramDto: CreateUserProgramDto): Promise<UserProgramDocument> {
    const sportStat = new this.userProgramModel(createUserProgramDto);
    return sportStat.save();
  }

  async findAll(): Promise<UserProgramDocument[]> {
    return this.userProgramModel.find();
  }

  findOne(id: string) {
    return this.userProgramModel.findById(id);
  }

  async update(id: string, updateUserProgramDto: UpdateUserProgramDto): Promise<UserProgramDocument> {
    return this.userProgramModel.findByIdAndUpdate(id, updateUserProgramDto);
  }

  async remove(id: string) {
    return this.userProgramModel.findByIdAndRemove(id);
  }
}
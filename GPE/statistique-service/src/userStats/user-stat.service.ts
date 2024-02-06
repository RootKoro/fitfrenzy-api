
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserStatDto } from './dto/create-user-stat.dto';
import { UpdateUserStatDto } from './dto/update-user-stat.dto';
import { UserStat, UserStatDocument } from '../schemas/user-stat.schema';

@Injectable()
export class UserStatService {
  constructor(
    @InjectModel(UserStat.name) private readonly userModel: Model<UserStatDocument>,
  ) {}

  async create(createUserStatDto: CreateUserStatDto): Promise<UserStatDocument> {
    const user = new this.userModel(createUserStatDto);
    return user.save();
  }

  async findAll(): Promise<UserStatDocument[]> {
    return this.userModel.find();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  async update(
    id: string,
    updateUserStatDto: UpdateUserStatDto,
  ): Promise<UserStatDocument> {
    return this.userModel.findByIdAndUpdate(id, updateUserStatDto);
  }

  async remove(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }
}
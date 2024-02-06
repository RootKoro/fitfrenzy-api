
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdviceDto } from './dto/create-advice.dto';
import { UpdateAdviceDto } from './dto/update-advice.dto';
import { Advice, AdviceDocument } from '../schemas/advice.schema';

@Injectable()
export class AdvicesService {
  constructor(
    @InjectModel(Advice.name) private readonly adviceModel: Model<AdviceDocument>,
  ) {}

  async create(createAdviceDto: CreateAdviceDto): Promise<AdviceDocument> {
    const advice = new this.adviceModel(createAdviceDto);
    return advice.save();
  }

  async findAll(): Promise<AdviceDocument[]> {
    return this.adviceModel.find();
  }

  findOne(id: string) {
    return this.adviceModel.findById(id);
  }

  async update(
    id: string,
    updateAdviceDto: UpdateAdviceDto,
  ): Promise<AdviceDocument> {
    return this.adviceModel.findByIdAndUpdate(id, updateAdviceDto);
  }

  async remove(id: string) {
    return this.adviceModel.findByIdAndRemove(id);
  }
}

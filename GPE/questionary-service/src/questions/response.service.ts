import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { Response, ResponseDocument,  } from '../schemas/response.schema';

@Injectable()
export class ResponseService {
  constructor(
    @InjectModel(Response.name) private readonly responseModel: Model<ResponseDocument>,
  ) {}

  async create(createResponseDto: CreateResponseDto): Promise<ResponseDocument> {
    const Response = new this.responseModel(createResponseDto);
    return Response.save();
  }

  async findAll(): Promise<ResponseDocument[]> {
    return this.responseModel.find();
  }

  findOne(id: string) {
    return this.responseModel.findById(id);
  }

  async update(id: string, updateResponseDto: UpdateResponseDto): Promise<ResponseDocument> {
    return this.responseModel.findByIdAndUpdate(id, updateResponseDto);
  }

  async remove(id: string) {
    return this.responseModel.findByIdAndRemove(id);
  }
}
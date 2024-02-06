import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { Program, ProgramDocument,  } from '../schemas/program.schema';
import { Exercice } from 'src/schemas/exercice.schema';

@Injectable()
export class ProgramService {
  constructor(
    @InjectModel(Program.name) private readonly programModel: Model<ProgramDocument>,
    @InjectModel(Exercice.name) private readonly exerciceModel: Model<ProgramDocument>,
  ) {}

  async create(createProgramDto: CreateProgramDto): Promise<ProgramDocument> {
    const program = new this.programModel(createProgramDto);
    return program.save();
  }

  async findAll(): Promise<ProgramDocument[]> {
    return this.programModel.find();
  }

  findOne(id: string) {
    return this.programModel.findById(id);
  }

  async update(id: string, updateProgramDto: UpdateProgramDto): Promise<ProgramDocument> {
    return this.programModel.findByIdAndUpdate(id, updateProgramDto);
  }

  async remove(id: string) {
    return this.programModel.findByIdAndRemove(id);
  }
}

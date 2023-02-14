
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customers.dto';
import { UpdateCustomerDto } from './dto/update-customers.dto';
import { Customer, CustomerDocument } from '../schemas/customers.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Customer.name) private readonly customerModel: Model<CustomerDocument>,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<CustomerDocument> {
    const user = new this.customerModel(createCustomerDto);
    return user.save();
  }

  async createAdmin(createUserDto: CreateUserDto): Promise<UserDocument> {
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async findAll(): Promise<CustomerDocument[]> {
    return this.customerModel.find();
  }

  findOne(id: string) {
    return this.customerModel.findById(id);
  }

  async update(
    id: string,
    updateCustomerDto: UpdateCustomerDto
  ): Promise<CustomerDocument> {
    return this.customerModel.findByIdAndUpdate(id, updateCustomerDto);
  }

  async remove(id: number) {
    return this.customerModel.findByIdAndRemove(id);
  }

  async getUser(query: object ): Promise<Customer> {
    return this.customerModel.findOne(query);
  }
}
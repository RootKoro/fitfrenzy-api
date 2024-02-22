import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customers.dto';
import { UpdateCustomerDto } from './dto/update-customers.dto';
import { Customer, CustomerDocument } from '../schemas/customers.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from '../schemas/user.schema';
import { UpdatePasswordDto } from './dto/update-password.dto';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Customer.name)
    private readonly customerModel: Model<CustomerDocument>,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(
    createCustomerDto: CreateCustomerDto,
  ): Promise<CustomerDocument> {
    try {
      const user = new this.customerModel(createCustomerDto);
      await user.save();
      return this.customerModel.findOne({ _id: user._id });
    } catch (error) {
      if (error.code === 11000) {
        throw new HttpException('Email already taken', HttpStatus.CONFLICT);
      }
      throw error;
    }
  }

  async createAdmin(createUserDto: CreateUserDto): Promise<UserDocument> {
    try {
      const user = new this.userModel(createUserDto);
      await user.save();
      return this.userModel.findOne({ _id: user._id });
    } catch (error) {
      if (error.code === 11000) {
        throw new HttpException('Email already taken', HttpStatus.CONFLICT);
      }
      throw error;
    }
  }

  async findAll(): Promise<CustomerDocument[]> {
    return this.customerModel.find();
  }

  findOne(id: string) {
    return this.customerModel.findById(id);
  }

  async update(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<CustomerDocument> {
    return this.customerModel.findByIdAndUpdate(id, updateCustomerDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.customerModel.findByIdAndRemove(id);
  }

  async getUser(query: object): Promise<Customer> {
    return this.customerModel.findOne(query).select('+password');
  }

  async checkPassword({ id, password }: { id: string, password: string }): Promise<Customer> {
    if(!Types.ObjectId.isValid(id) || new Types.ObjectId(id).toString() !== id) {
      throw new NotFoundException('Invalid ID format');
    }
    const customer = await this.customerModel.findOne(({ _id: id })).select('+password');

    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    const passwordMatches = await bcrypt.compare(password, customer.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Password does not match');
    }

    
    customer.password = undefined;
    return customer;
  }

  

  async changePassword(
    id: string, 
    updatePasswordDto: { password: string }
  ): Promise<CustomerDocument> {
    return this.customerModel.findByIdAndUpdate(id, updatePasswordDto, {
      new: true
    });
  }



}

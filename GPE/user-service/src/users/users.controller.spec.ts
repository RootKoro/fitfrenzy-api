import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection, Model, connect } from 'mongoose';
import { User, UserSchema } from '../schemas/user.schema';
import { Customer, CustomerSchema } from '../schemas/customers.schema';
import { CreateCustomerDto } from './dto/create-customers.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { HttpException } from '@nestjs/common';

describe('UsersController', () => {
  let controller: UsersController;
  let dbServer: MongoMemoryServer;
  let dbConn: Connection;
  let userModel: Model<User>;
  let customerModel: Model<Customer>;
  const createUserDto: CreateUserDto = {
    firstname: 'admin',
    lastname: 'admin',
    birthday: '09-09-1999',
    email: 'admin@example.com',
    password: 'password',
  } as CreateUserDto;
  const createCustomerDto: CreateCustomerDto = {
    firstname: 'John',
    lastname: 'Smith',
    birthday: '09-09-1999',
    email: 'john@example.com',
    password: 'password',
  } as CreateCustomerDto;

  beforeEach(async () => {
    dbServer = await MongoMemoryServer.create();
    const uri = dbServer.getUri();
    dbConn = (await connect(uri)).connection;

    userModel = dbConn.model(User.name, UserSchema);
    customerModel = dbConn.model(Customer.name, CustomerSchema);

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        { provide: getModelToken(User.name), useValue: userModel },
        { provide: getModelToken(Customer.name), useValue: customerModel },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  afterAll(async () => {
    await dbConn.dropDatabase();
    await dbConn.close();
    await dbServer.stop();
  });

  afterEach(async () => {
    const collections = dbConn.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createUser', () => {
    it('should create and return a user', async () => {
      const storedUser = await controller.createAdmin(createUserDto);
      expect(storedUser.firstname).toBe(createUserDto.firstname);
    });
    it('should not create a new user but return Bad Request', async () => {
      await new userModel(createUserDto).save();
      await expect(controller.createAdmin(createUserDto)).rejects.toThrow(
        new HttpException('Bad request', 400),
      );
    });
  });
});

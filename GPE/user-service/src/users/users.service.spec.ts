import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UserSchema } from '../schemas/user.schema';
import {
  Customer,
  CustomerDocument,
  CustomerSchema,
} from '../schemas/customers.schema';
import { CreateCustomerDto } from './dto/create-customers.dto';

describe('UsersService', () => {
  // const mockUserModel = {
  //   save: jest.fn(),
  // };
  // const mockCustomuerModel = {
  //   save: jest.fn(),
  //   find: jest.fn(),
  //   findOne: jest.fn(),
  //   update: jest.fn(),
  //   remove: jest.fn(),
  // };
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        // {
        //   provide: getModelToken('User'),
        //   useValue: mockUserModel,
        // },
        // {
        //   provide: getModelToken('Customer'),
        //   useValue: mockCustomuerModel,
        // },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('create => Should create a new customer and return its data', async () => {
  //   const createCustomerDto = {
  //     firstname: 'John',
  //     lastname: 'Smith',
  //     birthday: '09-09-1999',
  //     email: 'john@example.com',
  //     password: 'password',
  //   } as CreateCustomerDto;
  //   const customer = {
  //     _id: Date.now(),
  //     firstname: 'John',
  //     lastname: 'Smith',
  //     birthday: '1999-09-09T00:00:00.000Z',
  //     email: 'john@example.com',
  //     password: 'password',
  //     illness: [],
  //     preferences: [],
  //   } as CustomerDocument;
  //   jest.spyOn(mockCustomuerModel, 'save').mockReturnValue(customer);

  //   const result = service.create(createCustomerDto);

  //   expect(mockCustomuerModel.save).toBeCalled();
  //   expect(mockCustomuerModel.save).toBeCalledWith(createCustomerDto);

  //   expect(result).toEqual(customer);
  // });

  // it('createAdmin => Should crate an admin ', () => {});
  // it('findAll', () => {});
  // it('findOne', () => {});
  // it('update', () => {});
  // it('remove', () => {});
});

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  NotFoundException, 
  UnauthorizedException
} from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcryptjs';
import { CreateCustomerDto } from './dto/create-customers.dto';
import { UpdateCustomerDto } from './dto/update-customers.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdatePasswordDto } from './dto/update-password.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async create(@Body() createUserDto: CreateCustomerDto) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltOrRounds,
    );
    createUserDto.password = hashedPassword;
    return this.usersService.create(createUserDto);
  }

  @Post('/admin/signup')
  async createAdmin(@Body() createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltOrRounds,
    );
    createUserDto.password = hashedPassword;
    return this.usersService.createAdmin(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.usersService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Post('/checkPassword')
  @HttpCode(HttpStatus.OK)
  async checkPassword(@Body() { id, password}: { id: string, password: string }) {
    console.log(id, password);
    return this.usersService.checkPassword({ id, password });
  }


  @Post('/changePassword/:id')
  async changePassword(@Param('id') id: string, @Body() { password, newPassword }: UpdatePasswordDto) {
  try {
    await this.checkPassword({ id, password });

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(
      newPassword,
      saltOrRounds,
    );
    await this.usersService.changePassword(id, { password: hashedPassword });

    return { message: 'Password successfully changed.' };
  } catch (error) {
    
    if (error instanceof NotFoundException || error instanceof UnauthorizedException) {
      throw error;
    }
    throw new Error('An unexpected error occurred.');
  }
}

}

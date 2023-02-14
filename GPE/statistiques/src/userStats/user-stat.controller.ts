import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserStatService } from './user-stat.service';
import { CreateUserStatDto } from './dto/create-user-stat.dto';
import { UpdateUserStatDto } from './dto/update-user-stat.dto';

@Controller('user-stats')
export class UserStatController {
  constructor(private readonly userStatService: UserStatService) {}

  @Post()
  create(@Body() createUserStatDto: CreateUserStatDto) {
    return this.userStatService.create(createUserStatDto);
  }

  @Get()
  findAll() {
    return this.userStatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userStatService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserStatDto: UpdateUserStatDto) {
    return this.userStatService.update(id, updateUserStatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userStatService.remove(id);
  }
}
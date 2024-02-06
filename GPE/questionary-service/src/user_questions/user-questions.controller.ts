import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserQuestionsService } from './user-questions.service';
import { CreateUserQuestionsDto } from './dto/create-user-questions.dto';
import { UpdateUserQuestionsDto } from './dto/update-user-questions.dto';

@Controller('user-questions')
export class UserQuestionsController {
  constructor(private readonly userQuestionsService: UserQuestionsService) {}

  @Post()
  create(@Body() createUserQuestionsDto: CreateUserQuestionsDto) {
    return this.userQuestionsService.create(createUserQuestionsDto);
  }

  @Get()
  findAll() {
    return this.userQuestionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userQuestionsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserQuestionsDto: UpdateUserQuestionsDto) {
    return this.userQuestionsService.update(id, updateUserQuestionsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userQuestionsService.remove(id);
  }
}
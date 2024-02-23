import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserQuestionsService } from './user-questions.service';
import { CreateUserQuestionsDto } from './dto/create-user-questions.dto';
import { UpdateUserQuestionsDto } from './dto/update-user-questions.dto';

@Controller('users-answers')
export class UserQuestionsController {
  constructor(private readonly userQuestionsService: UserQuestionsService) {}

  @Post()
  create(@Body() createUserQuestionsDtos: CreateUserQuestionsDto[]) {
    createUserQuestionsDtos.forEach((createUserQuestionsDto) => {
      this.userQuestionsService.create(createUserQuestionsDto);
    });
  }

  @Get()
  findAll() {
    return this.userQuestionsService.findAll();
  }

  @Get('by-user/:id')
  findByUserID(@Param('id') id: string) {
    return this.userQuestionsService.findByUID(id);
  }

  @Get('by-question/:id')
  findByQuestionID(@Param('id') id: string) {
    return this.userQuestionsService.findByQID(id);
  }
}

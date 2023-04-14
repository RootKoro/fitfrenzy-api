import { PartialType } from '@nestjs/mapped-types';
import { CreateUserQuestionsDto } from './create-user-questions.dto';

export class UpdateUserQuestionsDto extends PartialType(CreateUserQuestionsDto) {}

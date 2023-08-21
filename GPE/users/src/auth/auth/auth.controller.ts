import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../jwt-auth.guard';
import { LocalAuthGuard } from '../local.guard';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from '../dto/auth-dto'; 

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() user: AuthDto) {
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Param("_id") _id: string) {
    return this.usersService.findOne(_id)
  }
}

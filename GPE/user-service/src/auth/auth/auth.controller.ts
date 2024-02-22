import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Logger,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../jwt-auth.guard';
import { LocalAuthGuard } from '../local.guard';
import { UsersService } from '../../users/users.service';

@Controller('/')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/profile')
  getProfile(@Request() req) {
    return this.usersService.findOne(req.user._id);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('get-users')
  async getUsers(){
    let res = await fetch ('http://localhost:3000/users');
     return res;
  }

  @UseGuards(JwtAuthGuard)
  @Get('get-sports')
  async getSports (){
    let res = await fetch ('http://localhost:3001/sports'); 
  }

  @UseGuards(JwtAuthGuard)
  @Get('get-questions')
  async getQuestions (){
    let res = await fetch ('http://localhost:3003/questions'); 
  }

  @UseGuards(JwtAuthGuard)
  @Get('get-programs')
  async getPrograms (){
    let res = await fetch ('http://localhost:3002/programs'); 
  }
} 

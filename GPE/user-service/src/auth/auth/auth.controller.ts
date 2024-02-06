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

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return this.usersService.findOne(req.user._id);
  }
}
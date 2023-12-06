import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Customer } from 'src/schemas/customers.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.getUser({ email });
    if (!user) {
      return null;
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    return passwordValid ? user : null;
  }

  async login(user: Customer & { _id: any }) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

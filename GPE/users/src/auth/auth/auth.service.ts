import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { AuthDto } from '../dto/auth-dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Customer } from 'src/schemas/customers.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<Customer> {
    const user = await this.usersService.getUser({ email: email });
    if (!user) { return null }
    const passwordValid = await bcrypt.compare(password, user.password);
    // console.log(user);
    // return user
    // bcrypt
    // .compare(password, user.password)
    // .then(res => )
    // const passwordValid = await bcrypt.compare(password, user.password);
    return passwordValid ? user : null;
    // return await this.usersService.getUser({ email: email });
  }

  async login(user: AuthDto) {
    let _user = await this.validateUser(user.email, user.password);
    if (!_user)
      return null
    const payload = { email: _user.email, sub: _user.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

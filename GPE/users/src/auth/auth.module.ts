import { Module } from "@nestjs/common"
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from "@nestjs/mongoose"
import { Customer, CustomerSchema } from "../users/user.model"
import { LocalStrategy } from './local.auth';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersService } from "src/users/users.service";
import { JwtStrategy } from "./jwt.strategy";
import { User, UserSchema } from "src/schemas/user.schema";


@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '60s' },
  }), MongooseModule.forFeature([{ name: Customer.name, schema: CustomerSchema }, { name: User.name, schema: UserSchema }])],
  providers: [UsersService, AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule { }


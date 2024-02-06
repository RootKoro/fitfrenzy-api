import { Module } from "@nestjs/common"
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from "@nestjs/mongoose"
import { Customer, CustomerSchema } from "src/schemas/customers.schema"
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersService } from "src/users/users.service";
import { JwtStrategy } from "./jwt.strategy";
import { User, UserSchema } from "src/schemas/user.schema";
import { jwtConstants } from "./constants"


@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '86400s' },
  }), MongooseModule.forFeature([{ name: Customer.name, schema: CustomerSchema }, { name: User.name, schema: UserSchema }])],
  providers: [UsersService, AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule { }


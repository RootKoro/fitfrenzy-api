import {
    IsNotEmpty,
    IsString,
    IsNumber,
    MaxLength,
  } from 'class-validator';

  export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    firstname: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    lastname: string;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsNumber()
    @IsNotEmpty()
    age: number;


    public getPassword(): string
    {
      return this.password;
    }

    public setPassword(password: string): void
    {
      this.password = password;
    }
  }
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  lastname: string;

  public getPassword(): string
  {
    return this.password;
  }

  public setPassword(password: string): void
  {
    this.password = password;
  }
}


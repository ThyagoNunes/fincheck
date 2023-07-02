import { IsString, IsNotEmpty, IsEmail, /* MinLength */ IsStrongPassword } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()  
  email: string;

  @IsString()
  @IsNotEmpty()
  /* @MinLength(8) */
  @IsStrongPassword({ minNumbers: 1, minSymbols: 1, minUppercase: 1 })
  password: string;

}

import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class AuthenticateDto { 
  @IsString()
  @IsNotEmpty()
  @IsEmail()  
  email: string;

  @IsString()
  @IsNotEmpty()
  /* @MinLength(8) */
  @IsStrongPassword ({ minNumbers: 1, minSymbols: 1, minUppercase: 1 })
  password: string;
}
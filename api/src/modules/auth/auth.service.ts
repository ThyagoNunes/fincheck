import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { AuthenticateDto } from './dto/authenticate.dto';
import { compare } from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'
@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService
  ) { }
  
  async authenticate(authenticateDto: AuthenticateDto) {
    const { email, password } = authenticateDto

    const user = await this.usersRepository.findUnique({
      where: {email},
    })

    if (!user) { 
      throw new UnauthorizedException('Invalid Credentials');
    }

    const isPasswordValid = await compare(password, user.password); 

      if (!isPasswordValid) { 
      throw new UnauthorizedException('Invalid Credentials');
      }
    
    const accessToken = await this.jwtService.signAsync({ sub: user.id });
    
    return {accessToken}; 
  }
}

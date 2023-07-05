import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { AuthenticateDto } from './dto/authenticate.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersRepository;
    private readonly jwtService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService);
    authenticate(authenticateDto: AuthenticateDto): Promise<{
        accessToken: string;
    }>;
}

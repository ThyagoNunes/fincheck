import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    authenticate(authenticateDto: AuthenticateDto): Promise<{
        accessToken: string;
    }>;
}

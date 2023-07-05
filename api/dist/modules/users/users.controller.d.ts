import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    index(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, unknown> & {})[]>;
    create(createUserDto: CreateUserDto): Promise<{
        name: string;
        email: string;
    }>;
}

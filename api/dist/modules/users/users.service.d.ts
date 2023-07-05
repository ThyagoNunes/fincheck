import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
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

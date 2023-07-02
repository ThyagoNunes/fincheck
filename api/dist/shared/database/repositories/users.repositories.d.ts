import { type Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";
export declare class UsersRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.UserCreateArgs): Prisma.Prisma__UserClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findUnique(findUniqueDto: Prisma.UserFindUniqueArgs): Prisma.Prisma__UserClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, unknown> & {}, null, import("@prisma/client/runtime").DefaultArgs>;
}

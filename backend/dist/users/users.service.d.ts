import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createUserDto: CreateUserDto): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(query: Prisma.UserInclude): Prisma.PrismaPromise<({
        posts: {
            id: string;
            title: string;
            body: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        _count: {
            posts: number;
        };
    } & {
        id: string;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findByEmail(email: string): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateUserDto: UpdateUserDto): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}

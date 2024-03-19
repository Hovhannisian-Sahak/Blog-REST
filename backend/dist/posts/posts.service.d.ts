import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class PostsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createPostDto: Prisma.PostCreateInput): Prisma.Prisma__PostClient<{
        id: string;
        title: string;
        body: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(query?: Prisma.PostInclude): Prisma.PrismaPromise<({
        categories: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        author: {
            id: string;
            name: string;
            email: string;
            password: string;
            createdAt: Date;
            updatedAt: Date;
        };
        _count: {
            author: number;
            categories: number;
        };
    } & {
        id: string;
        title: string;
        body: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Prisma.Prisma__PostClient<{
        id: string;
        title: string;
        body: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updatePostDto: Prisma.PostUpdateInput): Prisma.Prisma__PostClient<{
        id: string;
        title: string;
        body: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__PostClient<{
        id: string;
        title: string;
        body: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}

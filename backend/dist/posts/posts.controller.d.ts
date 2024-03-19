import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostQueryDto } from './dto/query.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(me: any, createPostDto: CreatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: string;
        title: string;
        body: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(query: PostQueryDto): import(".prisma/client").Prisma.PrismaPromise<({
        author: {
            id: string;
            name: string;
            email: string;
            password: string;
            createdAt: Date;
            updatedAt: Date;
        };
        categories: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: string;
        title: string;
        body: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updatePostDto: UpdatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: string;
        title: string;
        body: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: string;
        title: string;
        body: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}

import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}
  create(createPostDto: Prisma.PostCreateInput) {
    return this.prismaService.post.create({ data: createPostDto });
  }

  findAll(query?: Prisma.PostInclude) {
    return this.prismaService.post.findMany({ include: query });
  }

  findOne(id: string) {
    return this.prismaService.post.findUnique({ where: { id } });
  }

  update(id: string, updatePostDto: Prisma.PostUpdateInput) {
    return this.prismaService.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  remove(id: string) {
    return this.prismaService.post.delete({ where: { id } });
  }
}

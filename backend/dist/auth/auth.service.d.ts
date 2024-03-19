import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { ModuleRef } from '@nestjs/core';
import { User } from '@prisma/client';
export declare class AuthService {
    private moduleRef;
    private jwtService;
    private usersService;
    constructor(moduleRef: ModuleRef, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    sign(user: User): {
        access_token: string;
    };
    registerUser(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
}

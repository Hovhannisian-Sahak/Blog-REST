import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { UsersService } from 'src/users/users.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  private usersService: UsersService;
  constructor(
    private moduleRef: ModuleRef,
    private jwtService: JwtService,
  ) {
    this.usersService = this.moduleRef.get(UsersService, { strict: false });
  }
  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (user.password !== pass) {
      return null;
    }
    return user;
  }
  sign(user: User) {
    const accessToken = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });
    return {
      access_token: accessToken,
    };
  }
  async registerUser(createUserDto: CreateUserDto) {
    const newUser = await this.usersService.create(createUserDto);
    return this.sign(newUser);
  }
}

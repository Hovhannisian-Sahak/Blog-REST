import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { Me } from './me/me.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  login(@Req() req) {
    return this.authService.sign(req.user);
  }
  @Post('/register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }
  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  profile(@Me() me) {
    console.log(me);
    return me;
  }
}

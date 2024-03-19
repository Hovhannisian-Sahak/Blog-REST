import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    private authService;
    private jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    login(req: any): {
        access_token: string;
    };
    register(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
    profile(me: any): any;
}

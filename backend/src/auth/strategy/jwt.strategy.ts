import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwt } from '../constant';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    console.log(jwt.secret);
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwt.secret,
    });
  }
  validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}

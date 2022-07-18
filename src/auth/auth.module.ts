import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JWT } from '../constants';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: JWT.SECRET_KEY,
      signOptions: {  },
    })],
  providers: [AuthService, LocalStrategy, JwtStrategy, UsersService],
  exports: [AuthService]
})
export class AuthModule { }

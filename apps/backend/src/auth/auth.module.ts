import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from '../users/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt-strategy';

@Module({
  imports: [

    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: 'topSecret51',
      signOptions: {
        expiresIn: '3600s' ,
      } 
    }),

    TypeOrmModule.forFeature([UserRepository])
    ,
  ],

  controllers: [AuthController],

  providers: [
    JwtStrategy ,
    UserRepository,
    AuthService
  ],
  exports: [
    JwtStrategy,
    PassportModule
  ]
})
export class AuthModule { }

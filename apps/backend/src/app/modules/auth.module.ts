import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { ConfigService } from '@nestjs/config';
import { UserModule } from './user.module';

import { JwtStrategy } from '../utilities/jwt.strategy';
import { AuthService } from '../services/auth.service';
import { AuthResolver } from '../resolver/auth.resolver';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ 
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_KEY'),
          signOptions: {
            expiresIn: config.get<string>('EXPIRESIN'),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, JwtStrategy,AuthResolver],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
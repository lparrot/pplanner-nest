import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {UsersModule} from '../users/users.module'
import {PassportModule} from '@nestjs/passport'
import {LocalStrategy} from './local.strategy'
import {JwtModule} from '@nestjs/jwt'
import {jwtConstants} from './constants'
import {JwtStrategy} from './jwt.strategy'
import {APP_GUARD} from '@nestjs/core'
import {JwtAuthGuard} from './jwt.guard'

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '60s'},
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ]
})
export class AuthModule {
}

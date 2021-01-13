import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from "./auth/auth.module";
import {UsersModule} from './users/users.module';
import {ServeStaticModule} from '@nestjs/serve-static'
import {join} from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: process.env.NODE_ENV === 'production' ? join(__dirname, 'client') : join(__dirname, '..', 'static'),
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}

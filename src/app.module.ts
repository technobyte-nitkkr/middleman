import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { GoogleStrategy } from './auth/strategy';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { EventController } from './event/event.controller';
import { EventModule } from './event/event.module';
import { EventService } from './event/event.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    EventModule,
    PrismaModule,
    JwtModule.register({}),
  ],
  controllers: [AppController, AuthController, EventController],
  providers: [AppService, AuthService, GoogleStrategy, EventService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { GoogleStrategy, JwtStrategy } from './strategy';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';

@Module({
  imports: [JwtModule.register({})],
  providers: [GoogleStrategy, JwtStrategy, AuthService],
  controllers: [AuthController],
  exports: [GoogleStrategy, JwtStrategy],
})
export class AuthModule {}
